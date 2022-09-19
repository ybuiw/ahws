"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _antd = require("antd");

var _render = _interopRequireDefault(require("./render"));

var _jsxRuntime = require("react/jsx-runtime");

var Items = function Items(props) {
  var label = props.label,
      _props$key = props.key,
      key = _props$key === void 0 ? '' : _props$key;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "w--pro-search-items",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "label",
      children: label
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "render",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Form.Item, {
        name: key,
        children: (0, _render["default"])(props)
      })
    })]
  });
};

var _default = Items;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=Items.js.map