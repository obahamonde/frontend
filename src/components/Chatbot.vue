<script setup lang="ts">
const text = ref<string>("");
let wsRef = ref<WebSocket>();
const show = ref<boolean>(false);
</script>

<template>
  <div class="bg-white z-50 rounded-lg text-black sh br fixed w-96 overflow-y-scroll h-1/2 mb-45 col center m-4"
    v-if="show">
    <WebSocket ref="wsRef" url="ws://localhost:8080/api/chatbot/infer">
      <template #default="{ messages, status }">
        <div v-if="messages && status == 'OPEN'" class="h-full p-4">
          <div class="chat__messages">
            <div v-for="(message, index) in messages" :key="index" :class="{
              'chat__message--left': index % 2 == 0,
              'chat__message--right': index % 2 !== 0,
            }" class="chat__message">
              <div class="chat__message__content">
                <p class="chat__message__text">
                  {{ index % 2 == 0 ? "🤖" : "🙂" }}
                </p>
                <p class="chat__message__text">{{ message }}</p>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <Icon class="animate-spin text-primary x4" icon="loading" />
        </div>
      </template>
    </WebSocket>
    <input class="input bottom-0 fixed mb-32" v-model="text" @keyup.enter="
      wsRef!.send(text);
    text = '';
    " />
  </div>
  <Icon class="cp br x2 fixed m-12 mb-20 text-primary" icon="mdi-chat" @click="show = !show" />
</template>

<style>
.chat__message--left {
  @apply rounded-lg bg-gray-200 p-1 m-1;
}

.chat__message--right {
  @apply rounded-lg bg-primary p-1 m-1;
  color: white;
}

.chat__message__content {
  @apply col center;
}

.chat__message__text {
  @apply m-1;
}
</style>
