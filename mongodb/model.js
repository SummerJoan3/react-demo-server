const { mongoClient } = require('@/mongodb/mongo')
const juejinPostSchema = require('@/schema/juejin/post')
const juejinPostModel = mongoClient.model('juejinPostModel', juejinPostSchema, 'post')

module.exports = { juejinPostModel }
