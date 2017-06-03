'use strict'
module.exports = app => {
  class Token extends app.Controller {
    async getToken() {
      let token = ''
      try {
        token = await this.ctx.service.token.getToken()
        app.logger.info(token)
      } catch (e) {
        app.logger.error(e)
      }
      this.ctx.body = {
        success: true,
        token,
      }
    }
    async setToken() {
      // app.logger.info(this.ctx.request.body)
      let token = ''
      try {
        token = await this.ctx.service.token.setToken(this.ctx.request.query.value)
        app.logger.info(token)
      } catch (e) {
        app.logger.error(e)
      }
      this.ctx.body = {
        success: true,
        token,
      }
    }
  }
  return Token
}

