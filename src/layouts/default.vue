<script setup lang="ts">
const { query } = useRoute();
const { code } = query;
const auth = ref(false);
onMounted(() => {
  if (code) {
    auth.value = true;
  }
});
</script>

<template>
  <Auth v-if="auth"></Auth>
  <Dark />
  <NavBar />
  <User />
  <div class="container"><RouterView /></div>
</template>
