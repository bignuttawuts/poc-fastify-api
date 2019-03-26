'use strict'
const fp = require('fastify-plugin')

module.exports = fp(function (fastify, opts, next) {
  const cars = require('../handlers/cars-handler')(fastify)
  fastify.decorate('handlers', {
    cars
  })

  next()
})