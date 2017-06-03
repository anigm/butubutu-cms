'use strict'
module.exports = app => {
  class User extends app.Service {
    async queryUser(query = {}) {
      const users = await app.model.user.find(query)
      return users
    }
    async updateUser(data) {
      try {
        app.logger.info('updateUser:', data)
        // const result = await this.app.curl(this.app.config.followup.message, data)
      } catch (e) {
        app.logger.error(e)
      }
    }
    async saveUser(data) {
      try {
        const user = new app.model.user(data)
        await user.save()
      } catch (e) {
        app.logger.error(e)
      }
    }
  }
  return User
}
