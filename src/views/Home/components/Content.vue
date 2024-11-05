<template>
  <div class="content-container">
    <div class="flex justify-between banner">
      <!-- 左侧区域 -->
      <div class="banner-left pt-52">
        <!-- 主标题 -->
        <div class="flex items-center title">
          <div class="font-bold text-9xl koala">Koala</div>
          <div class="ml-5 creative-gallery text-8xl">创意工坊</div>
        </div>

        <!-- 子标题 -->
        <div class="font-bold desc">
          <div class="mb-10 text-6xl openSource mt-14">完全开源</div>
          <div class="text-5xl desc">释放你的创意，打造独一无二的海报！</div>
        </div>

        <!-- 提示箭头 -->
        <div
          class="w-16 h-32 pt-12 mt-20 tipArrows bg-gradient-to-t from-cyan-500 to-blue-500"
        >
          <img src="@/assets/home/tipArrows.svg" />
        </div>

        <!-- 相关地址 -->
        <div>
          相关地址
          <!-- <Button icon=""/> -->
        </div>
      </div>

      <!-- 右侧区域 -->
      <div class="relative right-0 bottom-20 banner-right">
        <img src="@/assets/home/light.png" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'ant-design-vue';
</script>

<style lang="scss" scoped>
.content-container {
  .banner-right {
    img {
      width: 656px;
      height: 900px;
    }
  }

  .banner-left {
    .tipArrows {
      border-radius: 36px;
    }
  }
}
</style>
