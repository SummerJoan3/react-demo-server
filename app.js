const Koa = require('koa')
const app = new Koa()
const router = require('./router/router')

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)