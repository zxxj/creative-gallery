import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import '@/styles/common.css';
import '@/styles/index.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import '@/styles/antd.css';

const app = createApp(App);
app.use(createPinia());
app.use(Antd);
app.use(router);
app.mount('#app');
