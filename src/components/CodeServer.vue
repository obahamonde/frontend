<script setup lang="ts">
const { state } = useStore();
const triggered = ref(false);
</script>
<template>
  <button @click="triggered = true" class="btn-get">Run CodeServer</button>
  <Request
    :url="'/api/codeserver?ref=' + state.user.ref"
    v-if="state.user && triggered"
  >
    <template #default="{ json }">
        <a :href="json.url" target="_blank">
        Click to go to CodeServer
      </a>
    </template>
  </Request>
</template>
