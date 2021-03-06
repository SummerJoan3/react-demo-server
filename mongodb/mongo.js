/**
 * author: Shawn
 * time  : 2017/8/29 16:55
 * desc  : 配置 MongoDB 连接
 * update: Shawn 2017/8/29 16:55
 */

let mongoose = require('mongoose')
let config = require('@/config/mongodb.json')

/**
 * debug 模式
 */
// mongoose.set('debug', true);

/**
 * 使用 Node 自带 Promise 代替 mongoose 的 Promise
 */
mongoose.Promise = global.Promise

// 配置 plugin。此处配置 plugin 的话是全局配置，推荐在 每个 Model 内 自己定义
// mongoose.plugin(require('./plugin').updatedAt);

/**
 * 配置 MongoDb options
 */
function getMongoOptions() {
  let options = {
    poolSize: 5, // 连接池中维护的连接数
    reconnectTries: Number.MAX_VALUE,
    keepAlive: 120,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
  return options
}

/**
 * 拼接 MongoDb Uri
 *
 * @returns {string}
 */
function getMongoUri() {
  let mongoUri = 'mongodb://'
  const dbName = config.db
  const host = config.host
  const port = config.port
  mongoUri += `${host}:${port}/${dbName}`
  return mongoUri
}

/**
 * 创建 Mongo 连接，内部维护了一个连接池，全局共享
 */
let mongoClient = mongoose.createConnection(getMongoUri(), getMongoOptions())

/**
 * Mongo 连接成功回调
 */
mongoClient.on('connected', function () {
  console.log('Mongoose connected to ' + getMongoUri())
})
/**
 * Mongo 连接失败回调
 */
mongoClient.on('error', function (err) {
  console.log('Mongoose connection error: ' + err)
})
/**
 * Mongo 关闭连接回调
 */
mongoClient.on('disconnected', function () {
  console.log('Mongoose disconnected')
})

/**
 * 关闭 Mongo 连接
 */
function close() {
  mongoClient.close()
}

module.exports = {
  mongoClient: mongoClient,
  close: close,
}
