'use strict'

module.exports = app => {
  class User extends app.Controller {
    async queryUser() {
      app.logger.info(this.ctx.request.query)
      let users = []
      try {
        users = this.ctx.service.user.queryUser(this.ctx.request.query)
        console.log('users', users)

      } catch (e) {
        app.logger.error(e)
      }
      this.ctx.body = {
        success: true,
        users,
      }
    }
    async saveUser() {
      app.logger.info(this.ctx.request.body)
      try {
        const user = new app.model.user(this.ctx.request.body)
        await user.save()
      } catch (e) {
        app.logger.error(e)
      }
      this.ctx.body = {
        success: true,
      }
    }
  }
  return User
}
