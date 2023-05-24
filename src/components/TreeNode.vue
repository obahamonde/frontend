<script setup lang="ts">
import { useTree } from "../store/tree";
const { state, setTree, setNode, focusNode } = useTree();
</script>
<template>
  <div>
    <h2>File Tree</h2>
    <div v-if="state.tree">
      <TreeNode :node="state.tree" @focusNode="focusNode" />
    </div>
  </div>
</template>
