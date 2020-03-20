const Router = require('koa-router')

const router = new Router()

router.get('/404', (ctx) => {
  let html = `
    <ul>
      <li><a href="/">回到主页</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `
  ctx.body = html
})

module.exports = router.routes()
