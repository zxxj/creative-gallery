export interface ComponentsData {
  // 每个组件的属性
  props: { [key: string]: any };

  // 每个组件的id
  id: string;

  // 每个组件的名字
  name: string;

  tag: string;
}

export interface EditorProps {
  // 画布区域数据
  components: ComponentsData[];

  // 记录当前编辑的是哪一个元素
  currentEditElement: string;
}
