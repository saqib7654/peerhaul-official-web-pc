// 自动生成接口，请勿直接修改!!!
import type { MemberInviteFriendSendEmailRequest, MemberInviteFriendSendEmailResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** send invite email */
export const sendEmailApi = generateApi<MemberInviteFriendSendEmailRequest, MemberInviteFriendSendEmailResponse>('/member/inviteFriend/sendEmail', 'POST')