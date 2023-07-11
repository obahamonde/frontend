<script setup lang="ts">
const url = ref("");
const { state } = useStore();
const urlTriggered = ref(false);
</script>
<template>
                    <div class="container">
                      <h1 class="text-title m-8">Your Bots</h1>
                      <input
                        class="input"
                        v-model="url"
                        placeholder="Enter your URL"
                        @keyup.enter="urlTriggered = true"
                      />

                      <div class="row gap-8 center" v-if="urlTriggered && state.user">
                        <WebSocket
                          :url="'ws://localhost:8080/api/chatbot/ingest?namespace=' + url + '&ref=' + state.user!.ref"
                        >
                          <template #default="{ data }">
                            <div v-if="data">
                              <ProgressBar
                                :completed="Number(Number(data).toFixed(2))"
                                bgcolor="#008080"
                              />
                            </div>
                          </template>
                        </WebSocket>
                      </div>
  </div>
</template>
<route lang="yaml">
meta:
  layout: app
</route>
