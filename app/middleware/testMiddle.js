'use strict'
module.exports = () => {
  return async(ctx, next) => {
    ctx.token = await ctx.service.token.getToken()
    await next()
  }
}
