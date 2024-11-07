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
    <div class="flex flex-wrap justify-between card-container">
      <Cards :data="posterList" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from 'vue';
import { ref, computed } from 'vue';
import { Segmented, Input } from 'ant-design-vue';
import { SearchOutlined } from '@ant-design/icons-vue';
import { useTestStore } from '@/stores/index';
import type { GlobalDataProps } from '@/stores/types/global';
import Cards from '@/components/Cards/index.vue';

const testStore: GlobalDataProps = useTestStore();

const posterList = computed(() => testStore.templates);

console.log(posterList.value);

const queryPosterType: Ref<string[]> = ref(['全部', '最热海报', '最新发布']);
const currentQueryPosterType = ref(queryPosterType.value[0]);
</script>
