'use strict'
const qiniu = require('qiniu')

module.exports = app => {
  class File extends app.Service {
    async upload(path, filename) {
      qiniu.conf.ACCESS_KEY = app.config.qiniu.key
      qiniu.conf.SECRET_KEY = app.config.qiniu.secret
      const { bucket, domain } = app.config.qiniu
      const putPolicy = new qiniu.rs.PutPolicy(bucket + ':' + filename)
      const token = putPolicy.token()
      const extra = new qiniu.io.PutExtra()
      const data = await new Promise(function(resolve, reject) {
        qiniu.io.putFile(token, filename, path, extra, function(err, data) {
          if (!err) {
            resolve(data)
          } else {
            app.logger.error(err)
            return reject(err)
          }
        })
      })
      app.logger.info('qiniu upload result:', data.hash, data.key)

      return `http://${domain}/${filename}`
    }
  }
  return File
}
