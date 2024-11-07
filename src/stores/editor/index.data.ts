import type { EditorProps, ComponentsData } from './editor';
import { v4 as uuidv4 } from 'uuid';

// 测试数据
export const testComponents: ComponentsData[] = [
  {
    id: uuidv4(),
    name: 'KoalaText',
    props: { text: 'hello', fontSize: '20px', color: '#f00' },
    tag: 'h1',
  },
  {
    id: uuidv4(),
    name: 'KoalaText',
    props: { text: 'hello1', fontSize: '30px', color: '#00f' },
    tag: 'p',
  },
  {
    id: uuidv4(),
    name: 'KoalaText',
    props: { text: 'hello2', fontSize: '40px', backgroundColor: '#fff' },
    tag: 'span',
  },
];
