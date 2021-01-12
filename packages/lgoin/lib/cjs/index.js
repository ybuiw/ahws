"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _reactCaptchaCode = _interopRequireDefault(require("react-captcha-code"));

var Code = function Code(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isSend = _useState2[0],
      setIsSend = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      codenum = _useState4[0],
      setCodenum = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      classs = _useState6[0],
      setClasss = _useState6[1];

  var _code = Number(props.count) || 60;

  (0, _react.useEffect)(function () {
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
            _antd.message.success('验证码发送成功', 1.5);

            setCodenum(_code);
            setIsSend(true);
          } else {
            _antd.message.error(msg ? msg : '发送失败', 1.5);

            setClasss('');
          }
        }
      } catch (err) {
        console.error(err);
      }
    });
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "ahwCode ".concat(classs),
    onClick: onCode
  }, isSend ? "".concat(codenum, "s \u540E\u91CD\u65B0\u83B7\u53D6") : '获取验证码');
};

var Login = function Login(props) {
  var _useState7 = (0, _react.useState)(''),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      code = _useState8[0],
      setCode = _useState8[1];

  var _Form$useForm = _antd.Form.useForm(),
      _Form$useForm2 = (0, _slicedToArray2.default)(_Form$useForm, 1),
      form = _Form$useForm2[0];

  var _source = props.source || 'username|code';

  var _sources = _source.split('|');

  var codeChange = (0, _react.useCallback)(function (captcha) {
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

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "loginPage",
    style: props.style
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "continar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "title",
    style: {
      paddingTop: typeof props.title === 'string' ? '30px' : '20'
    }
  }, props.title), /*#__PURE__*/_react.default.createElement(_antd.ConfigProvider, {
    input: {
      autoComplete: 'off'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Form, {
    form: form,
    size: "large",
    initialValues: {
      mobile: 18888888888
    },
    onFinish: props.onLogin
  }, isSource(_sources, 'username') && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
    name: "username",
    rules: [{
      required: true,
      message: '请输入账号'
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    placeholder: "\u8D26\u53F7"
  })), /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
    name: "password",
    rules: [{
      required: true,
      message: '请输入密码'
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Input.Password, {
    placeholder: "\u5BC6\u7801"
  }))), isSource(_sources, 'mobile') && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
    name: "mobile",
    rules: [{
      validator: mobilerequired
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    type: "number",
    maxLength: 11,
    placeholder: "\u624B\u673A\u53F7"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "display"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col",
    style: {
      marginRight: '10px'
    }
  }, /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
    name: "code",
    rules: [{
      required: true,
      message: '请输入验证码'
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    placeholder: "\u9A8C\u8BC1\u7801"
  }))), /*#__PURE__*/_react.default.createElement(Code, {
    count: props.count,
    onCode: getCode
  }))), isSource(_sources, 'username') && isSource(_sources, 'code') && /*#__PURE__*/_react.default.createElement("div", {
    className: "display"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col"
  }, /*#__PURE__*/_react.default.createElement(_antd.Form.Item, {
    name: "code",
    rules: [{
      validator: coderequired
    }]
  }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
    placeholder: "\u9A8C\u8BC1\u7801"
  }))), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactCaptchaCode.default, {
    charNum: 4,
    onChange: codeChange
  }))), /*#__PURE__*/_react.default.createElement(_antd.Form.Item, null, /*#__PURE__*/_react.default.createElement(_antd.Button, {
    type: "primary",
    htmlType: "submit",
    style: {
      width: '100%',
      marginTop: '10px'
    }
  }, "\u767B\u5F55")))))));
};

var _default = Login;
exports.default = _default;

function isSource(arr, str) {
  return arr.includes(str);
}

function ismobile(mobile) {
  var pattern = /^1[03456789]\d{9}$/;
  return pattern.test(mobile);
}

module.exports = exports.default; 
//# sourceMappingURL=index.js.map