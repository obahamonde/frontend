<script setup lang="ts">
import { Command } from "~/types/command"
import { useJson } from "~/composables/json"
const { loads, dumps } = useJson()
const { state } = useStore()
const wsRef = ref()
const message = ref("")
const send = computed(() => wsRef.value?.send)
const thisStatus = computed(() => wsRef.value?.status)
const open = computed(() => wsRef.value?.open)
const useSend = (message: string) => {
  if (message.length && thisStatus.value === "OPEN") {
    send.value(message)
  }
  else {
    open.value()
    send.value(message)
  }
}
const url = 
ref(`ws://localhost:8000/api/ws/${state.user!.ref}`)
const handleClosed = () => {

}
const messageJson = computed<string | undefined>(() => {
  if (message.value.length) {
    const parts = message.value.split(" ")
    const json:Command ={
      namespace: parts[0],
      command: parts[1],
      args: [...parts.slice(2)]
    }
    return dumps(json)
  }
})
const el = ref<HTMLElement | null>(null)
const { focused } = useFocus(el)
watchEffect(() => {
  if (!focused.value && el.value) {
    el.value.focus({ preventScroll: true })
  }
})

</script>
<template>
  <div class="col center">
    <h1>{{ loads(messageJson) }}</h1>
    <Ws :url="url" 
:keep-alive="false"
:chunked="true"
:progress="true"
ref="wsRef"
@send="message = ''"
@closed="handleClosed"
>
<template #default="{ json }" v-if="!message.length">
  <ProgressBar v-if="json" :completed="json.progress" bgcolor="#000000" />
  <div v-else class="text-center text-gray-500 text-sm">
   No data
  </div>
</template>
<template #default="{ json }" v-else>
  <div v-if="json">
   <ProgressBar :completed="json.progress" bgcolor="#000000" />
  </div>
  <div v-else class="text-center text-gray-500 text-sm">
   Press enter to send
  </div>
  </template>
<template #actions>
  
  <input class="input" type="text" v-model="message" 
  @keyup.enter="useSend(message)"
  ref="el"
  />
  </template>
  
</Ws>
  </div>
</template>