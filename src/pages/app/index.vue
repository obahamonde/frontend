<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
const { state } = useStore();
const { logout } = useAuth0();
</script>
<template>
  <div class="col center p-12 gap-4">
    <img :src="state.user!.picture" class="rf sh" />
    <h1 class="font-sans">{{ state.user!.name }}</h1>
    <h2 class="font-sans">{{ state.user!.email }}</h2>
    <button class="btn-del" @click="logout()">Logout</button>
  </div>
</template>
<route lang="yaml">
meta:
  layout: app
</route>
