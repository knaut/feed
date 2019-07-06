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

// KOA
import Koa from 'koa'
import logger from 'koa-logger'
import assets from 'koa-static'

// MIDDLEWARE
import errors from './middleware/errors.js'

// UTILS
import welcome from './utils/welcome'

const app = new Koa()

// ATTACH MIDDLEWARE
app.use(errors())
app.use(logger())
app.use(assets('./build'))

const PORT = process.env.PORT ? process.env.PORT : 3000

// START
app.listen(PORT)

welcome(`localhost:${PORT}`)
