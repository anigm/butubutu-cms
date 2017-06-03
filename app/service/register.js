'use strict'
module.exports = app => {
  class Register extends app.Service {
    async register(data) {
      try {
        app.logger.info('user register:', data)
      } catch (e) {
        app.logger.error(e)
      }
    }
  }
  return Register
}
