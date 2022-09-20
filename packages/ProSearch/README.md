ProSearch 搜索
===

二次封装`From`表单， 组件排版使用`antd`的栅格布局。

```jsx
import ProSearch from '@ahws/pro-search';
```

### 基本用法
 
<!--rehype:bgWhite=true&codeSandbox=true&codePen=true-->
```jsx
import ReactDOM from 'react-dom';
import ProSearch from '@ahws/pro-search';

ReactDOM.render(
  <ProSearch
    dataSource={[
      {
        type: 'Input',
        key: 'name',
        label: '姓名',
        attrs: {
          maxLength: 10,
          onChange: (e) => console.log(e)
        }
      },
      {
        type: 'Select',
        key: 'age',
        label: '性别',
        attrs: {
          options: [
            { label: '男', value: 1 },
            { label: '女', value: 2 }
          ]
        }
      }
    ]}
  />,
  _mount_
);
```

### Props

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| filter |  表单值  | `object` | `{}` |
| gutter | 表单数据间距  | `number` | `15` |
| dataSource | 	必填。表单数据配置 | `ProSearchDataSoureProps[]` | - |
| onChange | 	表单内容变化时的回调 | `(filter: object) => void` | - |


### ProSearchDataSoureProps

| 参数 | 说明 | 类型 | 默认值 |
|--------- |-------- |--------- |-------- |
| label |  表单文本  | `string` | - |
| key |  必填。传到后台的 key(filter 里定义的字段)  | `string` | - |
| type | 必填。表单类型  | `Input` `Select` | - |
| full |  表单是否占据一整行，数字则表示占位数  | `boolean` `number` | - |
| attrs | 额外参数，根据`type`类型传递对应的类型参数。参数兼容`antd`对应的api  | `object` | - |

