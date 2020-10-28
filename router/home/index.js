const Router = require('koa-router')
const router = new Router()

// 子路由1
router.get('/', async (ctx) => {
  ctx.status = 304
  let html = `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `
  // ctx.set('last-modified', 'Mon, 24 Dec 2020 09:49:49 GMT')
  // ctx.set('etag', '5c20abbd-e2e8')
  ctx.body = html
  console.log(ctx.response)
})

module.exports = router.routes()
