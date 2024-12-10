// 自动生成接口，请勿直接修改!!!
import type { MemberNotificationQueryPageRequest, MemberNotificationQueryPageResponse, MemberNotificationGetUnReadCountRequest, MemberNotificationGetUnReadCountResponse, MemberNotificationReadRequest, MemberNotificationReadResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** Paging notification */
export const queryPageApi = generateApi<MemberNotificationQueryPageRequest, MemberNotificationQueryPageResponse>('/member/notification/queryPage', 'POST')
/** get count of unread notification */
export const getUnReadCountApi = generateApi<MemberNotificationGetUnReadCountRequest, MemberNotificationGetUnReadCountResponse>('/member/notification/getUnReadCount', 'GET')
/** read notification */
export const readApi = generateApi<MemberNotificationReadRequest, MemberNotificationReadResponse>('/member/notification/read', 'POST')