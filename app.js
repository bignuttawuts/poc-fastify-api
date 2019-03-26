'use strict'
const path = require('path')
const AutoLoad = require('fastify-autoload')

module.exports = function (fastify, opts, next) {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'lib/plugins'),
    options: Object.assign({}, opts)
  })

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'services/v1'),
    options: { prefix: '/api/v1' }
  })

  // Make sure to call next when done
  next()
}

module.exports.options = {
  ignoreTrailingSlash: true
  // logger: {
  //   prettyPrint: true,
  //   level: 'debug',
  //   genReqId: function (req) {
  //     const instance = hyperid({
  //       urlSafe: true
  //     })
  //     const id = instance()
  //     return id
  //   }
  // }
}
