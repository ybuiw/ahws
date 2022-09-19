"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault")["default"];

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread2"));

var _antd = require("antd");

var _Items = _interopRequireDefault(require("./Items"));

var _utils = require("./utils");

var _jsxRuntime = require("react/jsx-runtime");

var ProSearch = function ProSearch(props) {
  var dataSource = props.dataSource,
      _props$gutter = props.gutter,
      gutter = _props$gutter === void 0 ? 15 : _props$gutter;

  var onFinish = function onFinish(values) {
    console.log('values==>', values);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.ConfigProvider, {
    input: {
      autoComplete: 'off'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "w--pro-search",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Form, {
        onFinish: onFinish,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_antd.Row, {
          gutter: gutter,
          className: "rows",
          children: [dataSource.map(function (item, index) {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Col, (0, _objectSpread2["default"])((0, _objectSpread2["default"])({
              className: "cell"
            }, (0, _utils.getColSpan)(item.full)), {}, {
              children: (0, _Items["default"])(item)
            }), index);
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Col, {
            className: "w--pro-search-btns",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_antd.Button, {
              type: "primary",
              htmlType: "submit",
              children: "Submit"
            })
          })]
        })
      })
    })
  });
};

var _default = ProSearch;
exports["default"] = _default;
module.exports = exports.default;
//# sourceMappingURL=index.js.map