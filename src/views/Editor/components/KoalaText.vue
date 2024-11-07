<template>
  <template v-for="component in components" :key="component.id">
    <component :is="component.tag" :style="component.props">{{
      component.props.text
    }}</component>
  </template>
</template>

<script setup lang="ts">
import type { ComponentsData } from '@/stores/editor/editor';

defineProps({
  components: {
    type: Array<ComponentsData>,
  },
});
</script>
