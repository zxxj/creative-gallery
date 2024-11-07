<template>
  <Tabs @change="tabChange" :activeKey="active">
    <TabPane v-for="tab in tabs" :tab="tab.tab" :key="tab.id" />
  </Tabs>
</template>

<script setup lang="ts">
import { getLocal, setLocal } from '@/utils/useLocal';
import { Tabs, TabPane } from 'ant-design-vue';
import type { TabPaneProps } from 'ant-design-vue';
import { ref } from 'vue';

defineProps({
  tabs: Array<TabPaneProps>,
});

const emits = defineEmits(['tabChange']);
const active = ref(getLocal('refreshBeforeRouter') || '/home');

const tabChange = (activeKey: any) => {
  active.value = activeKey;
  setLocal('refreshBeforeRouter', activeKey);
  emits('tabChange', activeKey);
};
</script>
