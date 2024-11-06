<template>
  <Tabs @change="tabChange">
    <TabPane v-for="tab in tabs" :tab="tab.tab" :key="tab.id" />
  </Tabs>
</template>

<script setup lang="ts">
import { Tabs, TabPane } from 'ant-design-vue';
import type { TabPaneProps } from 'ant-design-vue';

defineProps({
  tabs: Array<TabPaneProps>,
});

const emits = defineEmits(['tabChange']);

const tabChange = (activeKey: any) => {
  emits('tabChange', activeKey);
};
</script>
