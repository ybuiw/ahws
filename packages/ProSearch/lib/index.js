"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _Items = _interopRequireDefault(require("./Items"));

var _jsxRuntime = require("react/jsx-runtime");

var ProSearch = function ProSearch(props) {
  var dataSource = props.dataSource,
      _props$gutter = props.gutter,
      gutter = _props$gutter === void 0 ? 10 : _props$gutter;
  console.log(111);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "w--pro-search",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Form, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Row, {
        gutter: gutter,
        children: dataSource.map(function (item, index) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Col, {
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Items["default"], {})
          }, index);
        })
      })
    })
  });
};

var _default = ProSearch;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=index.js.map