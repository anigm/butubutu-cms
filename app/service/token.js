'use strict'
module.exports = app => {
  class Token extends app.Service {
    async getToken() {
      const token = await app.redis.get('token')
      app.logger.info('get token 为:', token)
      return token
    }
    async setToken(value) {
      app.logger.info('value', value)
      const token = await app.redis.setex('token', 7200, value)
      app.logger.info('set token 为:', token)
      return token
    }
  }
  return Token
}
