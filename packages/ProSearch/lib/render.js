"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _antd = require("antd");

var _jsxRuntime = require("react/jsx-runtime");

var _default = function _default(props) {
  var type = props.type,
      _props$label = props.label,
      label = _props$label === void 0 ? '' : _props$label;

  if (type === 'input') {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Input, {
      placeholder: "\u8BF7\u8F93\u5165".concat(label),
      allowClear: true
    });
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, {});
};

exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=render.js.map