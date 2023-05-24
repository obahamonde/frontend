<template>
  <div>
    <slot :json="response" name="outter"></slot>
  </div>
  <div v-if="status === 'OPEN'">
    <div v-if="props.progress">
      <slot :json="response[0]" v-if="response.length" />
      <div v-else class="text-center text-gray-500 text-sm">
        <p>Waiting for data</p>
        <slot :json="response" name="waiting" />
      </div>
    </div>
    <div v-else>
      <div v-if="props.chunked" v-for="item in response">
        <slot :json="item" />
      </div>
      <div v-else>
        <slot :json="response" />
      </div>
    </div>
    <div v-else>
      <p>Connection closed</p>
      <slot name="closed" :json="response" />
    </div>
    <slot name="actions" />
  </div>
  <div v-else class="text-center text-gray-500 text-sm">
    <p>Waiting for data</p>
    <slot name="actions" />
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  keepAlive: {
    type: Boolean,
    default: true,
  },
  json: {
    type: Boolean,
    default: true,
  },
  chunked: {
    type: Boolean,
    default: false,
  },
  progress: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["send", "closed"]);

const response = ref([]) as Ref<any>;

const { open, close, send, data, status } = useWebSocket(props.url, {
  autoReconnect: props.keepAlive,
});

watch(data, (newData: string) => {
  if (props.json) {
    newData = JSON.parse(newData);
  }
  response.value.unshift(newData);
  emit("send", newData);
});

onMounted(() => {
  open();
});

onBeforeUnmount(() => {
  if (status.value === "CLOSED") return;
  close();
  emit("closed");
});

watchEffect(() => {
  if (status.value === "CLOSED") return;
  if (props.progress) {
    response.value = [];
  }
});

defineExpose({ send, status, open, close });
</script>
