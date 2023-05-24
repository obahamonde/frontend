<script setup lang="ts">
const { state } = useStore();
const triggered = ref(false);
</script> 
<template>
  <button @click="triggered = true">Get VSCode</button>
  <Request
    :url="'/api/codeserver?ref=' + state.user.ref"
    v-if="state.user && triggered"
  >
    <template #default="{ json }">
      {{ json }}
    </template>
  </Request>
</template>
