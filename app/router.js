'use strict'

module.exports = app => {
  app.get('/token', 'token.getToken')
  app.post('/token', 'token.setToken')
  app.get('/user', 'user.queryUser')
  app.post('/user', 'user.saveUser')

  app.get('/index', 'register.index')
}
