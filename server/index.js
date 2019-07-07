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
import '@babel/polyfill'
import findRoot from 'find-root'

// KOA
import Koa from 'koa'
import logger from 'koa-logger'
import assets from 'koa-static'
import Router from 'koa-router'
import koaSend from 'koa-send'
import cors from '@koa/cors'
const {
  default: enforceHttps,
  xForwardedProtoResolver: resolver 
} = require('koa-sslify');

// MIDDLEWARE
import errors from './middleware/errors.js'

// UTILS
import welcome from './utils/welcome'

const app = new Koa()
const router = new Router()

// ROUTES
const oneDayMs = 1000 * 60 * 60 * 24;
const oneYearMs = oneDayMs * 365;

const base = findRoot(__dirname)
console.log(base)

const staticHandler = async ctx => koaSend(ctx, `/build/index.html`)

// ATTACH MIDDLEWARE
app.use(errors())
app.use(logger())
app.use(enforceHttps({ resolver }));
app.use(cors({
  origin: 'https://browser.blockstack.org',
  credentials: true
}))
app.use(assets('./build'))  // keep static assets at the top for routing priority

// SPA PAGE ROUTES
/* these are for one a user refreshes on a given SPA route */
router.get('/', staticHandler)
router.get('/(.*)', staticHandler)
router.get('/(.*)/feed', staticHandler)

app.use(router.routes())


const PORT = process.env.PORT ? process.env.PORT : 3000

// START
app.listen(PORT)

welcome(`localhost:${PORT}`)
