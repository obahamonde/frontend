<script setup lang="ts">
import { CSSProperties } from "vue";

const props = defineProps({
  completed: {
    type: Number,
    required: true,
  },
  bgcolor: {
    type: String,
    required: true,
  },
});

const fillerStyles = computed<CSSProperties>(() => {
  return {
    width: `${props.completed}%`,
    backgroundColor: props.bgcolor,
    transition: "width 0.2s ease-in",
    height: "2rem",
    borderRadius: "inherit",
    textAlign: "right",
  };
});
</script>
<template>
  <h1 class="title">Progress:</h1>
  <div class="container">
    <div :style="fillerStyles">
      <span class="label">{{ `${completed}%` }}</span>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: 2rem;
  width: 40rem;
  background-color: #e0e0de;
  border-radius: 50px;
  margin: 50px;
}

.label {
  padding: 5px;
  color: white;
  font-weight: bold;
}

.title {
  font-size: 1.5rem;
  color: #000000;
  margin-left: 50px;
}
</style>
