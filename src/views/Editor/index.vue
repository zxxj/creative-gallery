<template>
  <div class="editor-container">
    <div class="flex justify-between w-full h-full content-container">
      <div class="w-1/4 bg-red-500 components"></div>
      <div class="flex-1 bg-yellow-900 canvas">
        <Canvas />
      </div>
      <div class="w-1/4 bg-orange-500 attribute"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Canvas from './components/Canvas.vue';
</script>

<style lang="scss" scoped>
.editor-container {
  height: calc(100vh - 65px);
}
</style>
