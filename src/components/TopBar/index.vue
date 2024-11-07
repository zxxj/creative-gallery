<template>
  <div
    class="flex items-center justify-between w-full h-16"
    style="transition: all 0.5s"
  >
    <div class="w-12 h-12">
      <img src="@/assets/koala.png" class="w-full rounded-2xl" alt="logo" />
    </div>

    <Tabs class="mt-4" :tabs="tabs" @tabChange="change" />

    <div class="theme"></div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import Tabs from './Tabs.vue';
import { tabs } from './index';

const router = useRouter();

const change = (activeKey: string) => {
  router.push(activeKey);
};
</script>
