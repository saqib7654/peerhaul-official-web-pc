import { generateApi } from '@/utils/http'
import {
  MemberMemberGetCurrentMemberInfoRequest,
  MemberMemberGetCurrentMemberInfoResponse,
  MemberMemberUpdateMemberInfoRequest,
  MemberMemberUpdateMemberInfoResponse,
  MemberCardQueryPageRequest,
  MemberCardQueryPageResponse,
  MemberCardAddRequest,
  MemberCardAddResponse,
  MemberCardDeleteRequest,
  MemberCardDeleteResponse,
  MemberJobOrderPcQueryPageRequest,
  MemberJobOrderPcQueryPageResponse,
  MemberJobOrderPcExportRequest,
  MemberJobOrderPcExportResponse,
  MemberMemberGetNotificationSettingRequest,
  MemberMemberGetNotificationSettingResponse,
  MemberMemberUpdateNotificationSettingRequest,
  MemberMemberUpdateNotificationSettingResponse
} from '.'


/**
 * getCurrentMemberInfo
 */
export const getCurrentMemberInfoApi = generateApi<
  MemberMemberGetCurrentMemberInfoRequest,
  MemberMemberGetCurrentMemberInfoResponse
>('/member/member/getCurrentMemberInfo', 'GET')

/**
 * getCurrentMemberInfo
 */
export const updateMemberInfoApi = generateApi<
  MemberMemberUpdateMemberInfoRequest,
  MemberMemberUpdateMemberInfoResponse
>('/member/member/updateMemberInfo', 'POST')

/**
 * getCardList
 */
export const getCardListApi = generateApi<
  MemberCardQueryPageRequest,
  MemberCardQueryPageResponse
>('/member/card/queryPage', 'POST')


/**
 * addCard
 */
export const addCardApi = generateApi<
  MemberCardAddRequest,
  MemberCardAddResponse
>('/member/card/add', 'POST')


/**
 * deleteCard
 */
export const deleteCardApi = generateApi<
  MemberCardDeleteRequest,
  MemberCardDeleteResponse
>('/member/card/delete', 'POST')

/**
 * Paging transaction history
 */
export const getTransactHistoryApi = generateApi<
  MemberJobOrderPcQueryPageRequest,
  MemberJobOrderPcQueryPageResponse
>('/member/jobOrder/pc/queryPage', 'POST')

/**
 * export transaction history
 */
export const exportTransactHistoryApi = generateApi<
  MemberJobOrderPcExportRequest,
  MemberJobOrderPcExportResponse
>('/member/jobOrder/pc/export', 'POST', {
  responseType: 'blob'
})

/**
 * Get notification setting
 */
export const getSettingApi = generateApi<
  MemberMemberGetNotificationSettingRequest,
  MemberMemberGetNotificationSettingResponse
>('/member/member/getNotificationSetting', 'GET')

/**
 * Update notification setting
 */
export const updateSettingApi = generateApi<
  MemberMemberUpdateNotificationSettingRequest,
  MemberMemberUpdateNotificationSettingResponse
>('/member/member/updateNotificationSetting', 'POST')
