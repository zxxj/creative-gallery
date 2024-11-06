<template>
  <div class="home-container">
    <div ref="sentinel" class="sentinel"></div>
    <TopBar class="pl-8 pr-8" :class="{ fixed: isFixed }" />
    <Content />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import TopBar from '@/components/TopBar/index.vue';
import Footer from '@/components/Footer/index.vue';
import Content from '@/views/Home/components/Content.vue';
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

<style lang="scss" scoped>
.sentinel {
  height: 1px; /* 一个很小的元素，放在顶部或其他位置 */
}
.fixed {
  position: fixed;
  top: -5px;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: white;
  transition: all 0.5s;
}
</style>
