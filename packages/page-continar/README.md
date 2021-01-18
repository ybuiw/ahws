react后台page 页面封装
===
基于 `antd` 。依赖 `antd`, `dayjs`。
基础page页面，包含顶部区域，筛选区域，自定义区域，内容区域。

### 安装

```bash
npm install --save @ahws/page-continar
```

### 引入

```jsx
import PageContinar from '@ahws/page-continar';
```

### Demo

<!--DemoStart,bgWhite,codePen,codeSandbox--> 
```js
import React from 'react';
import PageContinar from '@ahws/page-continar';
import { Button } from 'antd';


const Page = (props: any) => {
  const headTab: any = [
    { key: 'tab1', tab: '按接收凭证' },
    { key: 'tab2', tab: '按项目类型' }
  ]

  // 筛选条件
  const searchItem: any[] = [
    { title: '姓名', name: 'name', value: 'aa', type: 'input'},
    { title: '手机号', name: 'mobile', type: 'input'},
    { title: '类型', name: 'type', type: 'select', width: 160, child: [
      {name: '类型1', value: '1'},
      {name: '类型2', value: '2'}
    ]},
    { title: '多选', name: 'checkbox', type: 'checkbox', child: [
      {name: '多选1', value: '1'},
      {name: '多选2', value: '2'}
    ]},
    { title: '日期', name: 'date', type: 'datePicker'},
    { title: '时间范围', name: 'date2', type: 'rangePicker'},
  ]

  const onHeadTab = (str : string) => {
    // 页签标题返回
    console.log(str)
  }

  const onSearch = (value: any) => {
    // 筛选 / 重置
    console.log(value)
  }

  return (
    <PageContinar
      title="我是标题"
      isBack={false}
      headExtra={
        <>
          <Button type="primary">下载附件</Button>
          <Button type="primary">+ 新增</Button>
        </>
      }
      headTab={headTab}
      // searchDom={<>筛选区域自定义内容</>}
      searchDom={searchItem}
      onHeadTab={onHeadTab}
      onSearch={onSearch}
    >
      <>
        <Table dataSource={dataSource} columns={columns} />
      </>
    </PageContinar>
  )
}

export default Page;
```
<!--End-->

## Props

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| title | 标题 | React.ReactNode | -- |
| isBack | 是否显示返回上一页 | Boolean | false |
| headExtra | 页头右侧自定义内容展示 | React.ReactNode | -- |
| headTab | 页头Tab列表 | CardTabListType[] | -- |
| searchDom | 筛选区域内容模块，支持数据配置 | SearchDom[] / React.ReactNode | -- |
| centerDom | 筛选区域下方位置自定义内容 | React.ReactNode | -- |
| onHeadTab | 页头Tab列表点击事件 | function(key: string) {} | -- |
| onSearch | 筛选及重置点击事件(如果是日期，内部已格式化日期) | function(values: any[]) {} | -- |


## Props headTab[]

- `tab`   名称。

- `key`   key。


## Props SearchDom[] 配置

`searchDom` 筛选区域内容配置。

- `title`   名称。

- `name`   字段名。

- `type`  类型。目前只支持 `input`, `select`, `checkbox`, `datePicker`, `rangePicker`。

- `width`  宽度。

- `child`  选择得数据。type为 `select`, `checkbox` 时配置 `[{name: '', value: ''}]`。



## 效果图
![calendar](https://github.com/ybuiw/ahws/blob/master/packages/page-continar/1.png)

