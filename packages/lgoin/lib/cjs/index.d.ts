import React from 'react';
import './index.css';
export declare type source = 'username/code' | 'username' | 'mobile';
export interface LoginFace {
    style?: React.CSSProperties;
    /**
     * 登录页log标题，可以是图片
    */
    title?: React.ReactNode | string;
    /**
     * 默认 username | code
     * @ username | code  账号，密码，验证码
     * @ username 账号，密码
     * @ mobile 手机号，验证码
    */
    source?: source;
    /**
     * source 为 mobile 的时候设置倒计时长
    */
    count?: number;
    /**
     * 登陆默认值，只有初始化以及重置时生效
     * @ username  账号
     * @ mobile 手机号
     * @ password 密码
    */
    values?: any;
    onLogin?: (values: any) => void;
    onCode?: any;
}
declare const Login: (props: LoginFace) => JSX.Element;
export default Login;
