ProButton 搜索
===

封装`Button`组。

```jsx
import ProButton from '@ahws/pro-button';
```

### 基本用法
 
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import ProButton from '@ahws/pro-button';

ReactDOM.render(
  <ProButton
    options={[
      { label: '提交', type: 'primary' },
      { label: '重置' }
    ]}
  />,
  _mount_
);
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| gutter | 按钮间距  | `number` | `10` |
| options | 按钮组配置 | `ProButtonOptionsProps[]` | - |


### ProButtonOptionsProps

`options` 集成 `antd Button`所有api。

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| label |  按钮文本  | `string` | - |
| visbile |  按钮显示状态  | `boolean` | `true` |

