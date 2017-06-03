'use strict'
module.exports =
  (function(modules) {
    // The module cache
    const installedModules = {}
    // The require function
    function __webpack_require__(moduleId) {
      // Check if module is in cache
      if (installedModules[moduleId]) {
        return installedModules[moduleId].exports
      }
      // Create a new module (and put it into the cache)
      const module = installedModules[moduleId] = {
        exports: {},
        id: moduleId,
        loaded: false,
      }
      // Execute the module function
      modules[moduleId].call(module.exports, module, module.exports, __webpack_require__)
      // Flag the module as loaded
      module.loaded = true
      // Return the exports of the module
      return module.exports
    }
    __webpack_require__.m = modules
    __webpack_require__.c = installedModules
    // __webpack_public_path__
    __webpack_require__.p = ''
    return __webpack_require__(0)

  })([
    function(module, exports, __webpack_require__) {

      module.exports = __webpack_require__(1)

    },
    function(module, exports, __webpack_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      })
      const _xmlParser = __webpack_require__(2)
      const _xmlParser2 = _interopRequireDefault(_xmlParser)
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj,
        }
      }
      const onerror = function onerror() {}
      exports.default = function() {
        const options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          onerror,
        }
        return function* (next) {
          if (this.is('text/xml', 'xml') && /^(POST|PUT|PATCH)$/i.test(this.method)) {
            if (!options.encoding && this.request.charset) {
              options.encoding = this.request.charset
            }
            try {
              this.request.body = yield (0, _xmlParser2.default)(this.req, options)
            } catch (err) {
              if (options.onerror) {
                options.onerror(err, this)
              } else {
                throw err
              }
            }
          }
          yield next
        }
      }

    },
    function(module, exports, __webpack_require__) {
      Object.defineProperty(exports, '__esModule', {
        value: true,
      })
      const _xml2js = __webpack_require__(3)
      const _rawBody = __webpack_require__(4)
      const _rawBody2 = _interopRequireDefault(_rawBody)
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj,
        }
      }

      const convertXml2Json = function convertXml2Json() /* str, options */ {
        const _len = arguments.length
        const args = Array(_len)
        for (let _len = arguments.length, _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key]
        }
        return new Promise(function(resolve, reject) {
          const cb = function cb(err, result) {
            err ? reject(err) : resolve(result)
          }
          _xml2js.parseString.apply(undefined, args.concat([ cb ]))
        })
      }

      const parse = function parse(request) {
        const _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$limit = _ref.limit,
          limit = _ref$limit === undefined ? '1mb' : _ref$limit,
          _ref$encoding = _ref.encoding,
          encoding = _ref$encoding === undefined ? 'utf8' : _ref$encoding,
          xmlOptions = _ref.xmlOptions

        let length = _ref.length
        let len = request.headers['content-length']
        if (len) {
          length = len = ~~len
        }
        return (0, _rawBody2.default)(request, {
          limit,
          encoding,
          length,
        }).then(function(str) {
          return convertXml2Json(str, xmlOptions || {}).catch(function(err) {
            err = typeof err === 'string' ? new Error(err) : err
            err.status = 400
            err.body = str
            throw err
          })
        }).catch(function(err) {
          throw err
        })
      }
      exports.default = parse
    },
    function(module) {
      module.exports = require('xml2js')
    },
    function(module) {
      module.exports = require('raw-body')
    },
  ])
