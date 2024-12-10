// 自动生成接口，请勿直接修改!!!
import type { DriverChatSendMessageRequest, DriverChatSendMessageResponse, DriverChatQueryPageRequest, DriverChatQueryPageResponse, DriverChatQueryMessagePageRequest, DriverChatQueryMessagePageResponse, DriverChatSendFcmRequest, DriverChatSendFcmResponse, DriverChatDeleteRequest, DriverChatDeleteResponse, DriverChatSendDataFcmRequest, DriverChatSendDataFcmResponse, DriverChatReadMessageRequest, DriverChatReadMessageResponse, DriverChatInitChatRequest, DriverChatInitChatResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** Send chat message */
export const sendMessageApi = generateApi<DriverChatSendMessageRequest, DriverChatSendMessageResponse>('/driver/chat/sendMessage', 'POST')
/** Paging talk list */
export const queryPageApi = generateApi<DriverChatQueryPageRequest, DriverChatQueryPageResponse>('/driver/chat/queryPage', 'POST')
/** Paging message list */
export const queryMessagePageApi = generateApi<DriverChatQueryMessagePageRequest, DriverChatQueryMessagePageResponse>('/driver/chat/queryMessagePage', 'POST')
/** send FCM */
export const sendFcmApi = generateApi<DriverChatSendFcmRequest, DriverChatSendFcmResponse>('/driver/chat/sendFCM', 'GET')
/** delete chat */
export const deleteApi = generateApi<DriverChatDeleteRequest, DriverChatDeleteResponse>('/driver/chat/delete', 'POST')
/** send FCM */
export const sendDataFcmApi = generateApi<DriverChatSendDataFcmRequest, DriverChatSendDataFcmResponse>('/driver/chat/sendDataFCM', 'GET')
/** read message */
export const readMessageApi = generateApi<DriverChatReadMessageRequest, DriverChatReadMessageResponse>('/driver/chat/readMessage', 'POST')
/** init chat */
export const initChatApi = generateApi<DriverChatInitChatRequest, DriverChatInitChatResponse>('/driver/chat/initChat', 'POST')