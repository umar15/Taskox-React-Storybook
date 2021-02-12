"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PureInboxScreen = PureInboxScreen;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _TaskList = _interopRequireDefault(require("./TaskList"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PureInboxScreen(_ref) {
  var error = _ref.error;

  if (error) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "page lists-show",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "wrapper-message",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "icon-face-sad"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "title-message",
          children: "Oh no!"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "subtitle-message",
          children: "Something went wrong"
        })]
      })
    });
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "page lists-show",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("nav", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
        className: "title-page",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "title-wrapper",
          children: "Taskbox"
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TaskList.default, {})]
  });
}

PureInboxScreen.propTypes = {
  error: _propTypes.default.string
};
PureInboxScreen.defaultProps = {
  error: null
};

var _default = (0, _reactRedux.connect)(function (_ref2) {
  var error = _ref2.error;
  return {
    error: error
  };
})(PureInboxScreen);

exports.default = _default;

//# sourceMappingURL=index.js.map