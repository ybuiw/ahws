AHW LOGIN PAGE
===
基于 `antd` 后台登陆页面封装。

```jsx
import Login from '@ahws/login';
```

### 基本用法

<!--DemoStart,bgWhite,codePen,codeSandbox--> 
```js
import Login from '@ahws/login';

ReactDOM.render(
  <Login
    style={{backgroundImage: `url(${bg})`}}
    title={ <img src={log} alt="" /> }
    source="mobile"
    count={3}
    onCode={getCode}
    onLogin={formhandle}
  />,
  _mount_
);
```
<!--End-->

## Props

### Button

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| title | 标题/logo | String/ReactNode | -- |
| source | 登录框类型 | `'username|code' | 'username' | 'mobile'` | `username|code` |
| count | source 为 mobile 的时候生效，设置倒计时长 | Number | 60 |
| onCode | source 为 mobile 的时候生效，获取验证码后回调 | function(boolean, msg) | -- |
| onLogin | 提交表单且数据验证成功后回调事件 | function(values) | -- |


