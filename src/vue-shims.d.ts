// 这段代码告诉 TypeScript 所有以.vue结尾的文件都是Vue组件,可以通过import语句进行导入.这样做通常可以解决无法识别模块的问题。
declare module '*.vue' {
  import { Component } from 'vue';
  const component: Component;
  export default component;
}
