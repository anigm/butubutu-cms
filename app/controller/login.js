'use strict'
module.exports = app => {
  class Login extends app.Controller {
    async index() {
      this.ctx.body = app.nunjucks.render('index.nj')
    }
    async toLogin() {
      app.logger.info('toLogin', app.request.query)
      this.ctx.body = app.nunjucks.render('login.nj')
    }
    async login() {
      app.logger.info(app.request.body)
      try {
        await this.ctx.service.login.login(app.token, app.request.body)
      } catch (e) {
        app.logger.error(e)
      }
      this.ctx.body = 'success'
    }
    // 登出，注销
    async logout() {
      app.logger.info('toLogin', app.request.query)
      this.ctx.body = app.nunjucks.render('login.nj')
    }
    // 第三方登录
  }
  return Login
}
