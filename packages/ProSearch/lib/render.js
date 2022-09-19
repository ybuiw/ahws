"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _react = require("react");

var _antd = require("antd");

var _jsxRuntime = require("react/jsx-runtime");

var _default = function _default(props) {
  var type = props.type,
      _props$label = props.label,
      label = _props$label === void 0 ? '' : _props$label,
      attrs = props.attrs;

  if (type === 'Input') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Input, (0, _objectSpread2["default"])({
      placeholder: "\u8BF7\u8F93\u5165".concat(label),
      allowClear: true
    }, attrs));
  }

  if (type === 'Select') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Select, (0, _objectSpread2["default"])({
      placeholder: "\u8BF7\u9009\u62E9".concat(label),
      allowClear: true
    }, attrs));
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {});
};

exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=render.js.map