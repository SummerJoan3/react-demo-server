const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')

const router = require('./router/router')

const handler = async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500
    ctx.response.body = {
      message: err.message,
    }
  }
}

app.use(handler)
app.use(bodyParser())

app.use(router.routes()).use(router.allowedMethods())
app.on('error', (err, ctx) => console.error('server error', err))
app.listen(3000)
