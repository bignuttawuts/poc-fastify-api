'use strict'

module.exports = (fastify) => ({
  drive: async (request, reply) => {
    request.log.info(request.id)
    reply.send({
      'status': 'DONE'
    })
  }
})