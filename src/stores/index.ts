import { defineStore } from 'pinia';
import type { GlobalDataProps } from './types/global';
import { testData } from './types/index.data';

export const useTestStore = defineStore('test', {
  state: (): GlobalDataProps => ({
    templates: testData,
    user: { isLogin: false },
  }),
});
