const Router = require('koa-router')

const router = new Router()

router.post('/404', (ctx) => {
  let res = { a: 2 }
  
  console.log(ctx.request.body)
  ctx.body = res
})

module.exports = router.routes()
