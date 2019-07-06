"use strict";

require("@babel/polyfill");

var _findRoot = _interopRequireDefault(require("find-root"));

var _koa = _interopRequireDefault(require("koa"));

var _koaLogger = _interopRequireDefault(require("koa-logger"));

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _koaSend = _interopRequireDefault(require("koa-send"));

var _cors = _interopRequireDefault(require("@koa/cors"));

var _errors = _interopRequireDefault(require("./middleware/errors.js"));

var _welcome = _interopRequireDefault(require("./utils/welcome"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var app = new _koa["default"]();
var router = new _koaRouter["default"](); // ROUTES

var oneDayMs = 1000 * 60 * 60 * 24;
var oneYearMs = oneDayMs * 365;
var base = (0, _findRoot["default"])(__dirname);
console.log(base);

var staticHandler =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(ctx) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _koaSend["default"])(ctx, "/build/index.html"));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function staticHandler(_x) {
    return _ref.apply(this, arguments);
  };
}(); // ATTACH MIDDLEWARE


app.use((0, _errors["default"])());
app.use((0, _koaLogger["default"])());
app.use((0, _cors["default"])({
  origin: 'https://browser.blockstack.org',
  credentials: true
}));
app.use((0, _koaStatic["default"])('./build')); // keep static assets at the top for routing priority
// SPA PAGE ROUTES

/* these are for one a user refreshes on a given SPA route */

router.get('/', staticHandler);
router.get('/(.*)', staticHandler);
router.get('/(.*)/feed', staticHandler);
app.use(router.routes());
var PORT = process.env.PORT ? process.env.PORT : 3000; // START

app.listen(PORT);
(0, _welcome["default"])("localhost:".concat(PORT));
//# sourceMappingURL=index.js.map