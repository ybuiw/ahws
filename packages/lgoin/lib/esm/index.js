import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useCallback, useEffect } from 'react';
import { ConfigProvider, Form, Input, Button, message } from 'antd';
import Captcha from 'react-captcha-code';
import './index.css';

var Code = function Code(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isSend = _useState2[0],
      setIsSend = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      codenum = _useState4[0],
      setCodenum = _useState4[1];

  var _useState5 = useState(''),
      _useState6 = _slicedToArray(_useState5, 2),
      classs = _useState6[0],
      setClasss = _useState6[1];

  var _code = Number(props.count) || 60;

  useEffect(function () {
    var _timer = null;

    if (isSend && codenum !== 0) {
      _timer = setInterval(function () {
        setCodenum(function (n) {
          if (n === 1) {
            setClasss('');
            setIsSend(false);
            clearInterval(_timer);
          }

          return n - 1;
        });
      }, 1000);
    }

    return function () {
      clearInterval(_timer);
    };
  }, [isSend, codenum]);

  var onCode = function onCode() {
    props.onCode(function (is, msg) {
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
        console.error(err);
      }
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "ahwCode ".concat(classs),
    onClick: onCode
  }, isSend ? "".concat(codenum, "s \u540E\u91CD\u65B0\u83B7\u53D6") : '获取验证码');
};

var Login = function Login(props) {
  var _useState7 = useState(''),
      _useState8 = _slicedToArray(_useState7, 2),
      code = _useState8[0],
      setCode = _useState8[1];

  var _Form$useForm = Form.useForm(),
      _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _source = props.source || 'username/code';

  var _sources = _source.split('/');

  var codeChange = useCallback(function (captcha) {
    setCode(captcha);
  }, []);

  var coderequired = function coderequired(rule, value) {
    if (!value) {
      return Promise.reject('请输入验证码');
    } else {
      if (code.toLowerCase() !== value.toLowerCase()) {
        return Promise.reject('验证码输入错误');
      }
    }

    return Promise.resolve();
  }; // 验证手机号码


  var mobilerequired = function mobilerequired(rule, value) {
    if (!value) {
      return Promise.reject('请输入手机号');
    } else {
      if (!ismobile(value)) {
        return Promise.reject('手机号输入错误');
      }
    }

    return Promise.resolve();
  };

  var getCode = function getCode(callback) {
    form.validateFields(['mobile']).then(function (res) {
      props.onCode(function (boolean, msg) {
        return callback(boolean, msg);
      });
    }).catch(function () {});
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "loginPage",
    style: props.style
  }, /*#__PURE__*/React.createElement("div", {
    className: "continar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form"
  }, /*#__PURE__*/React.createElement("div", {
    className: "title",
    style: {
      paddingTop: typeof props.title === 'string' ? '30px' : '20'
    }
  }, props.title), /*#__PURE__*/React.createElement(ConfigProvider, {
    input: {
      autoComplete: 'off'
    }
  }, /*#__PURE__*/React.createElement(Form, {
    form: form,
    size: "large",
    initialValues: props.values,
    onFinish: props.onLogin
  }, isSource(_sources, 'username') && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Form.Item, {
    name: "username",
    rules: [{
      required: true,
      message: '请输入账号'
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u8D26\u53F7"
  })), /*#__PURE__*/React.createElement(Form.Item, {
    name: "password",
    rules: [{
      required: true,
      message: '请输入密码'
    }]
  }, /*#__PURE__*/React.createElement(Input.Password, {
    placeholder: "\u5BC6\u7801"
  }))), isSource(_sources, 'mobile') && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Form.Item, {
    name: "mobile",
    rules: [{
      validator: mobilerequired
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    type: "number",
    maxLength: 11,
    placeholder: "\u624B\u673A\u53F7"
  })), /*#__PURE__*/React.createElement("div", {
    className: "display"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col",
    style: {
      marginRight: '10px'
    }
  }, /*#__PURE__*/React.createElement(Form.Item, {
    name: "code",
    rules: [{
      required: true,
      message: '请输入验证码'
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u9A8C\u8BC1\u7801"
  }))), /*#__PURE__*/React.createElement(Code, {
    count: props.count,
    onCode: getCode
  }))), isSource(_sources, 'username') && isSource(_sources, 'code') && /*#__PURE__*/React.createElement("div", {
    className: "display"
  }, /*#__PURE__*/React.createElement("div", {
    className: "col"
  }, /*#__PURE__*/React.createElement(Form.Item, {
    name: "code",
    rules: [{
      validator: coderequired
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\u9A8C\u8BC1\u7801"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Captcha, {
    charNum: 4,
    onChange: codeChange
  }))), /*#__PURE__*/React.createElement(Form.Item, null, /*#__PURE__*/React.createElement(Button, {
    type: "primary",
    htmlType: "submit",
    style: {
      width: '100%',
      marginTop: '10px'
    }
  }, "\u767B\u5F55")))))));
};

export default Login;

function isSource(arr, str) {
  return arr.includes(str);
}

function ismobile(mobile) {
  var pattern = /^1[03456789]\d{9}$/;
  return pattern.test(mobile);
} 
//# sourceMappingURL=index.js.map