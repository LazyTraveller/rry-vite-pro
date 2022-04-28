import {
  configHeaders,
  configError,
  configProgress,
  initAuth,
  clearAuth,
  Response,
} from '@gm-common/x-request'
import { AxiosResponse } from 'axios'
import { message as Tip } from 'antd'

initAuth('', 'access_token')

configError((message, res?: AxiosResponse<Response<any>>) => {
  // 按领导的要求，请求如果带auto_request参数，则不对报错进行处理
  const reqData = JSON.parse(res?.config.data)
  if (reqData?.auto_request) return
  if (res?.data?.message?.detail?.reason) {
    console.error(res?.data?.message?.detail?.reason)
  } else {
    console.log('configError', message, res)
  }

  const code = res?.data?.code || 0
})

// configProgress(NProgress.start, NProgress.done)

configHeaders()
