<script setup lang="ts">
const owner = ref("");
const repo = ref("");
const trigger = ref(false);
const repository = computed(() => {
  return owner.value + "/" + repo.value;
});
const payload = reactive({
  port: 8080,
  env_vars: ["DOCKER=1"],
});
const env = ref("");
const change_vars = () => {
  for (const line of env.value.split("\n")) {
    if (line.includes("=") && (line.split("=")[0] || "").length && (line.split("=")[1] || "").length) {
      payload.env_vars.push(line);
    }
  }
  return payload.env_vars
}

</script>
<template>
  <div>{{ payload.env_vars }}</div>
  <main class="container col center p-12 mx-auto px-4">
    <p col center>
      Username:
      <input type="text" input v-model="owner" placeholder="Owner of the repository" />
    </p>
    <p col center>
      Repository:
      <input type="text" input v-model="repo" placeholder="Name of the repository" />
    </p>
    <p col center>
      Port:
      <input type="number" input v-model="payload.port" placeholder="Port" />
    </p>
    Environment:
    <textarea class="input" v-model="env" :cols="24" @keyup.enter="change_vars()" placeholder="KEY=VALUE"
      @paste="change_vars()" @keyup.esc="payload.env_vars = []"></textarea>

    <button class="btn-get" @click="trigger = true">Deploy</button>
    <Request :url="'/api/deploy/' + repository" :options="{
      method: 'POST',
      body: JSON.stringify({ port: payload.port, env_vars: payload.env_vars }),
    }" v-if="trigger">
      <template #="{ json }">
        <a :href="json.url" class="btn-get"><strong>Visit your brand new App!</strong></a>
      </template>
      <template #loading>
        <Icon icon="mdi-loading" class="animate-spin x2" />
      </template>
      <template #error="{ error }">
        <p class="text-error">
          An error occurred:
          {{ error }}
        </p>
      </template>
    </Request>
  </main>
</template>
