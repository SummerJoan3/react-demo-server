const home = require('./home')
const page = require('./page/404')
const Router = require('koa-router')
const router = new Router({
  prefix: '/api'
})
router.use('/', home)
router.use('/page', page)
module.exports = router
