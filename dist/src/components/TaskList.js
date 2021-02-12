"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PureTaskList = PureTaskList;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Task = _interopRequireDefault(require("./Task"));

var _reactRedux = require("react-redux");

var _redux = require("../lib/redux");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function PureTaskList(_ref) {
  var loading = _ref.loading,
      tasks = _ref.tasks,
      onPinTask = _ref.onPinTask,
      onArchiveTask = _ref.onArchiveTask;
  var events = {
    onPinTask: onPinTask,
    onArchiveTask: onArchiveTask
  };
  var LoadingRow = /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "loading-item",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "glow-checkbox"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      className: "glow-text",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: "Loading"
      }), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: "cool"
      }), " ", /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: "state"
      })]
    })]
  });

  if (loading) {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "list-items",
      children: [LoadingRow, LoadingRow, LoadingRow, LoadingRow, LoadingRow, LoadingRow]
    });
  }

  if (tasks.length === 0) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "list-items",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "wrapper-message",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "icon-check"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "title-message",
          children: "You have no tasks"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "subtitle-message",
          children: "Sit back and relax"
        })]
      })
    });
  }

  var tasksInOrder = [].concat(_toConsumableArray(tasks.filter(function (t) {
    return t.state === "TASK_PINNED";
  })), _toConsumableArray(tasks.filter(function (t) {
    return t.state !== "TASK_PINNED";
  })));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "list-items",
    children: tasksInOrder.map(function (task) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Task.default, _objectSpread({
        task: task
      }, events), task.id);
    })
  });
}

PureTaskList.propTypes = {
  loading: _propTypes.default.bool,
  tasks: _propTypes.default.arrayOf(_Task.default.propTypes.task).isRequired,
  onPinTask: _propTypes.default.func,
  onArchiveTask: _propTypes.default.func
};
PureTaskList.defaultProps = {
  loading: false
};

var _default = (0, _reactRedux.connect)(function (_ref2) {
  var tasks = _ref2.tasks;
  return {
    tasks: tasks.filter(function (t) {
      return t.state === "TASK_INBOX" || t.state === "TASK_PINNED";
    })
  };
}, function (dispatch) {
  return {
    onArchiveTask: function onArchiveTask(id) {
      return dispatch((0, _redux.archiveTask)(id));
    },
    onPinTask: function onPinTask(id) {
      return dispatch((0, _redux.pinTask)(id));
    }
  };
})(PureTaskList);

exports.default = _default;

//# sourceMappingURL=TaskList.js.map