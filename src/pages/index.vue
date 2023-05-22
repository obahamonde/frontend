<script setup lang="ts">
const image = ref("")
const sse = ref(false)
const show = ref(false)
</script>
<template>
  <div class="col center p-4 m-4 bg-gray-300">
  <input class="input" type="text" v-model="image"
  @keyup.enter="sse = true"
  />
  </div>
  <div v-if="sse">
  <Sse :url="'/api/pull/' + image"
  @closed="show=true"
  >
    <template #="message">
      <p>{{ message }}</p>
      <br />
  
    </template>
    <template #actions>
    <button class="btn-del"
      @click="sse = false"
      >Clear</button>  
      </template>
  </Sse>
  </div>
</template>