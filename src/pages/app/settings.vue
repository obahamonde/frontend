<script setup lang="ts">
const { state } = useStore();
const show = ref(false);
const copy = (text: string) => {
  navigator.clipboard.writeText(text);
};
</script>
<template>
  <h1 class="text-title m-8">Your Resources</h1>
  <div class="row gap-8 center">
    <Request :url="'/api/codeserver?ref=' + state.user!.ref">
      <template #default="{ json }">
        <div class="col center p-12 gap-4 bg-gray-300 rounded sh">
          <h1 class="text-xl font-bol text-primary">Code Server Instance</h1>
          <Icon icon="logos:visual-studio-code" class="w-12 h-12" />
          <p><strong>Image: </strong> {{ json.image }}</p>
          <p><strong>External Port: </strong>{{ json.port }}</p>
          <p><strong>Subdomain name: </strong>{{ json.user }}</p>
          <p>
            <strong>Created: </strong
            >{{ new Date(Number(json.ts)).toLocaleString() }}
          </p>
        </div>
      </template>
    </Request>
    <Request :url="'/api/db/' + state.user!.ref">
      <template #default="{ json }">
        <div class="col center p-12 gap-4 bg-gray-300 rounded sh">
          <h1 class="text-xl font-bol text-primary">Database Instance</h1>

          <Icon icon="mdi-database" class="w-12 h-12 text-primary" />
          <p><strong>Global Id: </strong> {{ json.global_id }}</p>
          <p><strong>Role: </strong>{{ json.role }}</p>
          <p class="row center gap-2">
            <strong>Database Secret Key: </strong
            >{{ show ? json.secret : "***********" }}
            <Icon
              icon="mdi-clipboard"
              @click="copy(json.secret)"
              class="text-primary hover:text-cyan cp scale"
            />
            <Icon
              icon="mdi-eye"
              class="text-primary hover:text-cyan cp scale"
              @click="show = !show"
            />
          </p>
          <p>
            <strong>Created: </strong
            >{{ new Date(Number(json.ts)).toLocaleString() }}
          </p>
        </div>
      </template>
    </Request>
  </div>
</template>
<route lang="yaml">
meta:
  layout: app
</route>
