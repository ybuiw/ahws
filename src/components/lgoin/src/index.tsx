import React, { useState, useCallback, useEffect } from 'react';
import { ConfigProvider, Form, Input, Button, message } from 'antd';
import Captcha from 'react-captcha-code';
import './index.css';

export type source = 'username|code' | 'username' | 'mobile'

export interface LoginFace {
  style?: React.CSSProperties,
  /**
   * 登录页log标题，可以是图片
  */
  title?: React.ReactNode | string,
  /**
   * 默认 username | code
   * @ username | code  账号，密码，验证码
   * @ username 账号，密码
   * @ mobile 手机号，验证码
  */
  source?: source,
  /**
   * source 为 mobile 的时候设置倒计时长
  */
  count?: number,
  onLogin?: (values: any) => void,
  onCode?: any,
}



const Code = (props: LoginFace) => {
  const [isSend, setIsSend] = useState<boolean>(false)
  const [codenum, setCodenum] = useState<number>(0);
  const [classs, setClasss] = useState<string>('');
  const _code: number = Number(props.count) || 60;

  useEffect(() => {
    let _timer: any = null;
    if (isSend && codenum !== 0) {
      _timer = setInterval(() => {
        setCodenum(n => {
          if (n === 1) {
            setClasss('');
            setIsSend(false);
            clearInterval(_timer)
          }
          return n - 1
        });
      }, 1000)
    }
    return () => {
      clearInterval(_timer)
    };
  }, [isSend, codenum])

  const onCode = () => {
    props.onCode((is: boolean, msg: string) => {
      try {
        if (typeof is !== 'boolean') {
          throw new Error('发送验证码onCode事件callback回调第一个字符串必须为 boolean');
        } else {
          setClasss('disabled');
          if (is) {
            message.success('验证码发送成功', 1.5);
            setCodenum(_code);
            setIsSend(true);
          } else {
            message.error(msg ? msg : '发送失败', 1.5);
            setClasss('');
          }
        }
      } catch (err) {
        console.error(err)
      }
    })
  }

  return (
    <div className={`ahwCode ${classs}`} onClick={onCode}>
      {isSend ? `${codenum}s 后重新获取` : '获取验证码'}
    </div>
  )
}

const Login = (props: LoginFace) => {
  const [code, setCode] = useState<string>('');
  const [form] = Form.useForm();

  const _source: any = props.source || 'username|code';
  const _sources = _source.split('|');

  const codeChange = useCallback((captcha: string) => {
    setCode(captcha)
  }, []);
  
  const coderequired = (rule: any, value: string) => {
    if (!value) {
      return Promise.reject('请输入验证码');
    } else {
      if (code.toLowerCase() !== value.toLowerCase()) {
        return Promise.reject('验证码输入错误');
      }
    }
    return Promise.resolve();
  }

  // 验证手机号码
  const mobilerequired = (rule: any, value: string) => {
    if (!value) {
      return Promise.reject('请输入手机号');
    } else {
      if (!ismobile(value)) {
        return Promise.reject('手机号输入错误');
      }
    }
    return Promise.resolve();
  }

  const getCode = (callback: any) => {
    form.validateFields(['mobile']).then(res => {
      props.onCode((boolean: boolean, msg?:string) => callback(boolean, msg))
    }).catch(() => {})
  }

  return (
    <div className="loginPage" style={props.style}>
      <div className="continar">
        <div className="form">
          <div className="title" style={{
            paddingTop: typeof props.title === 'string' ? '30px' : '20'
          }}>{props.title}</div>
          <ConfigProvider input={{
            autoComplete: 'off' 
          }}>
            <Form
              form={form}
              size="large"
              initialValues={{ mobile: 18888888888 }}
              onFinish={props.onLogin}
            >
              {isSource(_sources, 'username') &&
                <>
                  <Form.Item
                    name="username"
                    rules={[{ required: true, message: '请输入账号' }]}
                  >
                    <Input placeholder="账号" />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入密码' }]}
                  >
                    <Input.Password placeholder="密码" />
                  </Form.Item>
                </>
              }
              {isSource(_sources, 'mobile') &&
                <>
                  <Form.Item
                    name="mobile"
                    rules={[{ validator: mobilerequired }]}
                  >
                    <Input type="number" maxLength={11} placeholder="手机号" />
                  </Form.Item>
                  <div className="display">
                    <div className="col" style={{marginRight: '10px'}}>
                      <Form.Item
                        name="code"
                        rules={[{ required: true, message: '请输入验证码' }]}
                      >
                        <Input placeholder="验证码" />
                      </Form.Item>
                    </div>
                    <Code count={props.count} onCode={getCode} />
                  </div>
                </>
              }
              {isSource(_sources, 'username') && isSource(_sources, 'code') &&
                <div className="display">
                  <div className="col">
                    <Form.Item
                      name="code"
                      rules={[{ validator: coderequired }]}
                    >
                      <Input placeholder="验证码" />
                    </Form.Item>
                  </div>
                  <div>
                    <Captcha charNum={4} onChange={codeChange} />
                  </div>
                </div>
              }
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{width: '100%', marginTop: '10px'}}>登录</Button>
              </Form.Item>
            </Form>
          </ConfigProvider>
        </div>
      </div>
    </div>
  )
}

export default Login;

function isSource(arr: any[string], str: string) {
  return arr.includes(str);
}

function ismobile(mobile: number | string) {
  var pattern: any = /^1[03456789]\d{9}$/;
  return pattern.test(mobile)
}