"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Button = function Button() {
  return _react["default"].createElement("button", {
    onClick: function onClick() {
      return alert('Native button');
    }
  }, "Native Button");
};

var _default = Button;
exports["default"] = _default;