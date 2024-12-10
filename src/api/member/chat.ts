// 自动生成接口，请勿直接修改!!!
import type { MemberChatSendMessageRequest, MemberChatSendMessageResponse, MemberChatQueryPageRequest, MemberChatQueryPageResponse, MemberChatQueryMessagePageRequest, MemberChatQueryMessagePageResponse, MemberChatSendFcmRequest, MemberChatSendFcmResponse, MemberChatDeleteRequest, MemberChatDeleteResponse, MemberChatReadMessageRequest, MemberChatReadMessageResponse, MemberChatInitChatRequest, MemberChatInitChatResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** Send chat message */
export const sendMessageApi = generateApi<MemberChatSendMessageRequest, MemberChatSendMessageResponse>('/member/chat/sendMessage', 'POST')
/** Paging talk list */
export const queryPageApi = generateApi<MemberChatQueryPageRequest, MemberChatQueryPageResponse>('/member/chat/queryPage', 'POST')
/** Paging message list */
export const queryMessagePageApi = generateApi<MemberChatQueryMessagePageRequest, MemberChatQueryMessagePageResponse>('/member/chat/queryMessagePage', 'POST')
/** send FCM */
export const sendFcmApi = generateApi<MemberChatSendFcmRequest, MemberChatSendFcmResponse>('/member/chat/sendFCM', 'GET')
/** delete chat */
export const deleteApi = generateApi<MemberChatDeleteRequest, MemberChatDeleteResponse>('/member/chat/delete', 'POST')
/** read message */
export const readMessageApi = generateApi<MemberChatReadMessageRequest, MemberChatReadMessageResponse>('/member/chat/readMessage', 'POST')
/** init chat */
export const initChatApi = generateApi<MemberChatInitChatRequest, MemberChatInitChatResponse>('/member/chat/initChat', 'POST')