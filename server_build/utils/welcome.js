"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = welcome;

var _chalk = _interopRequireDefault(require("chalk"));

var _figlet = _interopRequireDefault(require("figlet"));

var _nodeEmoji = _interopRequireDefault(require("node-emoji"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function welcome(address) {
  var timestamp = (0, _moment["default"])().format('llll');

  var fig = _chalk["default"].magenta(_figlet["default"].textSync('feedServer', {
    horizontalLayout: 'fit',
    verticalLayout: 'fit',
    font: 'Graffiti'
  }));

  console.log(fig);
  console.log(_nodeEmoji["default"].get('four_leaf_clover'), "", "".concat(_chalk["default"].bold.magenta('Feed Server'), " started at ").concat(_chalk["default"].bold.cyan(address), " on ").concat(_chalk["default"].bold.green(timestamp)));
}
//# sourceMappingURL=welcome.js.map