<template>
  <div class="flex items-center justify-between h-20">
    <div class="w-16 h-16">
      <img src="@/assets/koala.png" class="w-full rounded-2xl" alt="logo" />
    </div>

    <Tabs :tabs="tabs" />

    <div class="theme"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Tabs from './Tabs.vue';
import { tabs } from './index.ts';
</script>
