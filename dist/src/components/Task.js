"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Task;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Task(_ref) {
  var _ref$task = _ref.task,
      id = _ref$task.id,
      title = _ref$task.title,
      state = _ref$task.state,
      onArchiveTask = _ref.onArchiveTask,
      onPinTask = _ref.onPinTask;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "list-item ".concat(state),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
      className: "checkbox",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        type: "checkbox",
        defaultChecked: state === "TASK_ARCHIVED",
        disabled: true,
        name: "checked"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "checkbox-custom",
        onClick: function onClick() {
          return onArchiveTask(id);
        }
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "title",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        type: "text",
        value: title,
        readOnly: true,
        placeholder: "Input title"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "actions",
      onClick: function onClick(event) {
        return event.stopPropagation();
      },
      children: state !== "TASK_ARCHIVED" && /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
        onClick: function onClick() {
          return onPinTask(id);
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "icon-star"
        })
      })
    })]
  });
}

Task.propTypes = {
  task: _propTypes.default.shape({
    id: _propTypes.default.string.isRequired,
    title: _propTypes.default.string.isRequired,
    state: _propTypes.default.string.isRequired
  }),
  onArchiveTask: _propTypes.default.func,
  onPinTask: _propTypes.default.func
};

//# sourceMappingURL=Task.js.map