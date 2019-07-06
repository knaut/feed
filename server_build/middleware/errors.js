'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports['default'] = errors

function asyncGeneratorStep (gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value } catch (error) { reject(error); return } if (info.done) { resolve(value) } else { Promise.resolve(value).then(_next, _throw) } }

function _asyncToGenerator (fn) { return function () { var self = this; var args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next (value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value) } function _throw (err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err) } _next(undefined) }) } }

function errors () {
  return (
    /* #__PURE__ */
    function () {
      var _ref = _asyncToGenerator(
      /* #__PURE__ */
        regeneratorRuntime.mark(function _callee (ctx, next) {
          return regeneratorRuntime.wrap(function _callee$ (_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0
                  _context.next = 3
                  return next()

                case 3:
                  _context.next = 10
                  break

                case 5:
                  _context.prev = 5
                  _context.t0 = _context['catch'](0)
                  ctx.status = _context.t0.status || 500
                  ctx.body = _context.t0.message
                  ctx.app.emit('error', _context.t0, ctx)

                case 10:
                case 'end':
                  return _context.stop()
              }
            }
          }, _callee, null, [[0, 5]])
        }))

      return function (_x, _x2) {
        return _ref.apply(this, arguments)
      }
    }()
  )
}
// # sourceMappingURL=errors.js.map
