AHW LOGIN PAGE
===
基于 `antd` 后台登录页面封装。依赖 `react-captcha-code`

```jsx
import Login from '@ahws/login';
```

### 基本用法

<!--DemoStart,bgWhite,codePen,codeSandbox--> 
```js
import Login from '@ahws/login';
import bg from 'bg.png';
import log from 'log.png';

const LoginPage = () => {
  const onLogin = v => {
    console.log(v)
  }

  const getCode = (callback) => {
    // 模拟发送验证码
    setTimeout(() => {
      // 发送成功
      callback(true)

      // 发送失败
      // callback(false)
    }, 1000);
  }

  return (
    <Login
      style={{backgroundImage: `url(${bg})`}}
      title={ <img src={log} alt="" /> }
      source="mobile"
      values={{ mobile: 18888888888 }}
      count={60}
      onCode={getCode}
      onLogin={onLogin}
    />
  )
}

export default LoginPage;
```
<!--End-->

## Props

| 参数 | 说明 | 类型 | 默认值 |
| -------- | -------- | -------- | -------- |
| title | 标题/logo | String/ReactNode | -- |
| source | 登录框类型 | `username/code` / `username` / `mobile` | `username/code` |
| count | source 为 mobile 的时候生效，设置倒计时长 | Number | 60 |
| values | 登陆默认值，只有初始化以及重置时生效 | Object | -- |
| onCode | source 为 mobile 的时候生效，获取验证码后回调 | function(boolean, msg) | -- |
| onLogin | 提交表单且数据验证成功后回调事件 | function(values) | -- |


