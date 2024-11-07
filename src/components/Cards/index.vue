<template>
  <Card class="mt-5 w-72 card" v-for="item in data">
    <div class="cover h-96">
      <img :src="item.coverImage" class="w-full h-full" />
    </div>

    <div class="mt-4">
      <div class="text-xl font-bold poster-title">{{ item.title }}</div>
      <div class="flex mt-3">
        <div class="text-base author">{{ item.author }}</div>
        <div class="ml-3 push-date text-slate-400">2024-11-08</div>
      </div>

      <div class="flex items-center justify-between mt-4">
        <Button type="primary" class="w-16">收藏</Button>
        <Button type="primary" class="flex-1 ml-5">立即编辑</Button>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import type { TemplateProps } from '@/stores/types/template';
import { Button, Card } from 'ant-design-vue';

defineProps({
  data: Array<TemplateProps>,
});
</script>
