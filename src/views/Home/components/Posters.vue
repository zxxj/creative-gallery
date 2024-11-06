<template>
  <div class="posters-container banner">
    <!-- 标题区域 -->
    <div class="flex items-center justify-between">
      <div class="flex items-center left">
        <h1 class="text-4xl font-bold">热门海报</h1>
        <p class="ml-6 text-sm text-neutral-500">
          根据您的喜好替换图片和文字，一键自动生成H5
        </p>
      </div>

      <Input class="w-96" size="large" placeholder="在海量模板中搜索">
        <template #prefix>
          <SearchOutlined />
        </template>
      </Input>
      <div class="right w-96">
        <Segmented
          v-model:value="currentQueryPosterType"
          :options="queryPosterType"
          block
          size="large"
        />
      </div>
    </div>

    <!-- 海报素材列表 -->
    <div class="flex flex-wrap justify-between card-container ">
      <Card class="mt-5 w-72 " v-for="item in 8">
        <div class="cover h-96">
          <img src="@/assets/home/111.png" class="w-full h-full" />
        </div>

        <div class="mt-4">
          <div class="text-xl font-bold poster-title">心动11.11特别活动</div>
          <div class="flex mt-3">
            <div class="text-base author">张鑫鑫</div>
            <div class="ml-3 push-date text-slate-400">2024-11-08</div>
          </div>

          <div class="flex items-center justify-between mt-4">
            <Button type="primary" class="w-16">收藏</Button>
            <Button type="primary" class="flex-1 ml-5">立即编辑</Button>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import { ref } from 'vue';
import { Button, Card, Segmented, Input } from 'ant-design-vue';
import { SearchOutlined } from '@ant-design/icons-vue';

const queryPosterType: Ref<string[]> = ref(['全部', '最热海报', '最新发布']);
const currentQueryPosterType = ref(queryPosterType.value[0]);
</script>
