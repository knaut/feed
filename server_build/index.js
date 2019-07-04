"use strict";

require("@babel/polyfill");

var _koa = _interopRequireDefault(require("koa"));

var _koaLogger = _interopRequireDefault(require("koa-logger"));

var _koaStatic = _interopRequireDefault(require("koa-static"));

var _errors = _interopRequireDefault(require("./middleware/errors.js"));

var _welcome = _interopRequireDefault(require("./utils/welcome"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
  _____                .____________                                
_/ ____\____  ____   __| _/   _____/ ______________  __ ___________ 
\   __\/ __ \/ __ \ / __ |\_____  \_/ __ \_  __ \  \/ // __ \_  __ \
 |  | \  ___|  ___// /_/ |/        \  ___/|  | \/\   /\  ___/|  | \/
 |__|  \___  >___  >____ /_______  /\___  >__|    \_/  \___  >__|   
           \/    \/     \/       \/     \/                 \/       

           Serve Feed web app files in a simple way.
*/
// IMPORTS
// KOA
// MIDDLEWARE
// UTILS
var app = new _koa["default"](); // ATTACH MIDDLEWARE

app.use((0, _errors["default"])());
app.use((0, _koaLogger["default"])());
app.use((0, _koaStatic["default"])('../build'));
var PORT = process.env.PORT ? process.env.PORT : 3000; // START

app.listen(PORT);
(0, _welcome["default"])("localhost:".concat(PORT));
//# sourceMappingURL=index.js.map