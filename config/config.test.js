'use strict'

module.exports = () => {
  return {
    followup: {
      subscribe: 'http://qa-followup.xingshulin.com/new-cloudfollowup-service/person/insertPatientByWeChatScanCode',
      unsubscribe: 'http://qa-followup.xingshulin.com/new-cloudfollowup-service/inner/cancelFollowUp',
      message: 'http://qa-followup.xingshulin.com/new-cloudfollowup-service/inner/sendMsgFromWechat',
      doctorId: '2006473',
    },
    logger: {
      dir: '/apps/butubutu-cms/logs',
    },
    tempFileDir: '/apps/infirmary-weixin/temp',
    redis: 'redis://:Riy2Pc9GvMa@192.168.251.8:6379/10',
  }
}
