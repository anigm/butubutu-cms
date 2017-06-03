'use strict'

module.exports = appInfo => {
  return {
    middleware: [],
    keys: appInfo.name + 1,
    view: {
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.nj': 'nunjucks',
      },
    },
    mongoose: {
      url: 'mongodb://139.199.22.83/butubutu',
      options: {},
    },
    security: {
      csrf: false,
    },
    redis: {
      client: {
        host: '139.199.22.83',
        port: '6379',
        // family: 'user',
        password: '88mm0201@maocg',
        db: '0',
      },
    },
    qiniu: {
      key: 'yourkey',
      secret: 'yoursecret',
      bucket: '',
      domain: '',
    },
  }
}
