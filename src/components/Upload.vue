<script setup lang="ts">
const filesData = ref<
  { name: string; size: number; type: string; lastModified: number }[]
>([]);
function onDrop(files: File[] | null) {
  filesData.value = [];
  if (files) {
    filesData.value = files.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
    }));
  }
}
const dropZoneRef = ref<HTMLElement>();

const handleInput = () => {
  const input = document.createElement("input");
  input.type = "file";
  input.multiple = true;
  input.onchange = () => {
    onDrop(Array.from(input.files as FileList));
  };
  input.click();
};

const totalSize = computed(() => {
  if (filesData.value.length === 0) return 0;
  return filesData.value.reduce((acc, file) => acc + file.size, 0);
});
const { isOverDropZone } = useDropZone(dropZoneRef, onDrop);
</script>

<template>
  <div ref="dropZoneRef" class="dropzone" dropzone @click="handleInput">
    <div>{{ isOverDropZone ? "Drop Files" : "Drag Files" }}</div>
    <div>
      <div>
        <small
          >{{ filesData.length }} file
          {{ filesData.length > 1 ? "s" : "" }} selected
          {{ (totalSize / 1000).toFixed(2) }} KB</small
        >
      </div>
    </div>
  </div>
</template>
<style scoped>
.dropzone {
  @apply col center my-4 mx-2d w-full h-full border-2 border-dashed border-gray-800 rounded-md;
  @apply bg-gray-100 text-gray-800 text-center text-sm font-medium transition-colors duration-150 ease-in-out;
  @apply px-4 py-4 cp opacity-50 hover: opacity-100;
}
</style>
