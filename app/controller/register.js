'use strict'
module.exports = app => {
  class Register extends app.Controller {
    async index() {
      this.ctx.body = app.nunjucks.render('index.nj')
    }
    async toRegister() {
      app.logger.info('toRegister', app.request.query)
      this.ctx.body = app.nunjucks.render('register.nj')
    }
    async register() {
      app.logger.info(app.request.body)
      try {
        await this.ctx.service.register.register(app.token, app.request.body)
      } catch (e) {
        app.logger.error(e)
      }
      this.ctx.body = 'success'
    }
  }
  return Register
}
