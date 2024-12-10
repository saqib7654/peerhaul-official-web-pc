// 自动生成接口，请勿直接修改!!!
import type { MemberCommonSendMsgRequest, MemberCommonSendMsgResponse, MemberCommonSendEmailRequest, MemberCommonSendEmailResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** send msg */
export const sendMsgApi = generateApi<MemberCommonSendMsgRequest, MemberCommonSendMsgResponse>('/member/common/sendMsg', 'POST')
/** send email */
export const sendEmailApi = generateApi<MemberCommonSendEmailRequest, MemberCommonSendEmailResponse>('/member/common/sendEmail', 'POST')