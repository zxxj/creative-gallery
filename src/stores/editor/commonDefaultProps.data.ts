// 文本组件元素的通用属性
export const commonDefaultProps = {
  // actions
  actionType: '',
  url: '',

  // 默认尺寸属性
  height: '',
  width: '318px',
  paddingLeft: '0px',
  paddingRight: '0px',
  paddingTop: '0px',
  paddingBottom: '0px',

  // 默认边框属性
  borderStyle: 'none',
  borderColor: '#000',
  borderWidth: '0',
  borderRadius: '0',

  // 默认阴影和透明度
  boxShadow: '0 0 0 #000000',
  opacity: 1,

  // 默认定位相关属性
  position: 'absolute',
  left: '0',
  top: '0',
  right: '0',
};

// 文本组件的特殊属性
export const textDefaultProps = {
  text: '正文内容',
  // 默认字体属性
  fontSize: '14px',
  fontFamily: '',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textDecoratation: 'none',
  lineHeight: '1',
  textAlign: 'center',
  color: '#000',
  backgroundColor: '',
  ...commonDefaultProps,
};
