// 自动生成接口，请勿直接修改!!!
import type { MemberJobOrderQueryPageRequest, MemberJobOrderQueryPageResponse, MemberJobOrderExportRequest, MemberJobOrderExportResponse, MemberJobOrderPayRequest, MemberJobOrderPayResponse, MemberJobOrderAppPayRequest, MemberJobOrderAppPayResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** Paging transaction history */
export const queryPageApi = generateApi<MemberJobOrderQueryPageRequest, MemberJobOrderQueryPageResponse>('/member/jobOrder/queryPage', 'POST')
/** export transaction history */
export const exportApi = generateApi<MemberJobOrderExportRequest, MemberJobOrderExportResponse>('/member/jobOrder/export', 'POST')
/** Pay the order */
export const payApi = generateApi<MemberJobOrderPayRequest, MemberJobOrderPayResponse>('/member/jobOrder/pay', 'POST')
/** Pay the order in app */
export const appPayApi = generateApi<MemberJobOrderAppPayRequest, MemberJobOrderAppPayResponse>('/member/jobOrder/appPay', 'POST')