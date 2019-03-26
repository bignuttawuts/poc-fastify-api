'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/cars/:id/drive', fastify.handlers.cars.drive)
}
