<template>
  <div class="canvans-container">
    <KoalaText :components="components" />
  </div>
</template>

<script setup lang="ts">
import type { EditorProps } from '@/stores/editor/editor';
import { useEditorStore } from '@/stores/editor/index';
import { computed } from 'vue';
import KoalaText from './KoalaText.vue';

const editorStore: EditorProps = useEditorStore();

const components = computed(() => editorStore.components);
</script>
