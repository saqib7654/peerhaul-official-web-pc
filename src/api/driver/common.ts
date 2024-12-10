// 自动生成接口，请勿直接修改!!!
import type { DriverCommonSendMsgRequest, DriverCommonSendMsgResponse, DriverCommonSendEmailRequest, DriverCommonSendEmailResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** send sms */
export const sendMsgApi = generateApi<DriverCommonSendMsgRequest, DriverCommonSendMsgResponse>('/driver/common/sendMsg', 'POST')
/** send email */
export const sendEmailApi = generateApi<DriverCommonSendEmailRequest, DriverCommonSendEmailResponse>('/driver/common/sendEmail', 'POST')