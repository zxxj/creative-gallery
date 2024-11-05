<template>
  <div class="home-container">
    <TopBar class="pl-8 pr-8" />
    <Content />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import TopBar from '@/components/TopBar/index.vue';
import Footer from '@/components/Footer/index.vue';
import Content from '@/views/Home/components/Content.vue';
</script>
