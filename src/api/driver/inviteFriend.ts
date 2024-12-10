// 自动生成接口，请勿直接修改!!!
import type { DriverInviteFriendSendEmailRequest, DriverInviteFriendSendEmailResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** send invite email */
export const sendEmailApi = generateApi<DriverInviteFriendSendEmailRequest, DriverInviteFriendSendEmailResponse>('/driver/inviteFriend/sendEmail', 'POST')