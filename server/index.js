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

// MIDDLEWARE
import errors from './middleware/errors.js'

// UTILS
import welcome from './utils/welcome'

const app = new Koa()
const router = new Router()

// ROUTES
const oneDayMs = 1000 * 60 * 60 * 24;
const oneYearMs = oneDayMs * 365;

const staticHandler = async ctx => koaSend(ctx, `/build/index.html`)

router.get('/', staticHandler)
router.get('/(.*)', staticHandler)
router.get('/(.*)/feed', staticHandler)

// ATTACH MIDDLEWARE
app.use(errors())
app.use(logger())
app.use(assets('./build'))
app.use(router.routes())

const PORT = process.env.PORT ? process.env.PORT : 3000

// START
app.listen(PORT)

welcome(`localhost:${PORT}`)
