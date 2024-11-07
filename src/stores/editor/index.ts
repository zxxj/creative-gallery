import { defineStore } from 'pinia';
import { testComponents } from './index.data';
import type { EditorProps } from './editor';

export const useEditorStore = defineStore('editor', {
  state: (): EditorProps => ({
    components: testComponents,
    currentEditElement: '1',
  }),
});
