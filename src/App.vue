<script setup lang="ts">
import { RouterView } from 'vue-router';
import { ConfigProvider } from 'ant-design-vue';
import TopBar from '@/components/TopBar/index.vue';

const theme = {
  token: {
    colorPrimary: '#0b1926',
  },
};

import { onMounted, onUnmounted, ref } from 'vue';

// 是否开启固定定位
const isFixed = ref(false);
// 一个dom
const sentinel = ref<HTMLElement | null>(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    entries => {
      // 如果 sentinel 元素可见，isFixed 为 false，否则为 true
      isFixed.value = !entries[0].isIntersecting;
    },
    { threshold: 0 },
  );

  if (sentinel.value) {
    observer.observe(sentinel.value);
  }

  // 在组件卸载时清理观察器
  onUnmounted(() => {
    observer.disconnect();
  });
});
</script>

<template>
  <ConfigProvider :theme="theme">
    <div ref="sentinel" class="sentinel"></div>
    <TopBar class="pl-8 pr-8" :class="{ fixed: isFixed }" />

    <RouterView />
  </ConfigProvider>
</template>

<style lang="scss" scoped>
.sentinel {
  height: 1px; /* 一个很小的元素，放在顶部或其他位置 */
}
.fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  opacity: 1;
  z-index: 999;
  background-color: white;
  transition:
    opacity 1s,
    top 1s,
    box-shadow 0.5s; /* 添加必要的过渡属性 */
}
</style>
