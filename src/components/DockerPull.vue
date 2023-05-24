<script setup lang="ts">
const wsRef = ref();
const message = ref("");
const send = computed(() => wsRef.value?.send);
const thisStatus = computed(() => wsRef.value?.status);
const open = computed(() => wsRef.value?.open);
const useSend = (message: string) => {
  if (message.length && thisStatus.value === "OPEN") {
    send.value(message);
  } else {
    open.value();
    send.value(message);
  }
};
const image = ref("");
const url = computed(
  () => `ws://localhost:8080/api/docker/pull/${thisImage.value}`
);
const el = ref<HTMLElement | null>(null);
const { focused } = useFocus(el);
watchEffect(() => {
  if (!focused.value && el.value) {
    el.value.focus({ preventScroll: true });
  }
});
const thisImage = ref("");
</script>
<template>
  <h1>{{ url }}</h1>
  <div class="col center">
    <Ws
      :url="url"
      :keep-alive="false"
      :chunked="true"
      :progress="true"
      ref="wsRef"
      @send="message = ''"
      v-if="thisImage"
    >
      <template #default="{ json }" v-if="!message.length">
        <div>{{ json }}</div>
        <ProgressBar v-if="json" :completed="json.progress" bgcolor="#000000" />
        <div v-else class="text-center text-gray-500 text-sm">No data</div>
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
        <input
          class="input"
          type="text"
          v-model="message"
          @keyup.enter="useSend(message)"
          ref="el"
        />
      </template>
    </Ws>
    <input
      class="input"
      type="text"
      v-model="image"
      @keyup.enter="thisImage = image"
      ref="el"
    />
  </div>
</template>
