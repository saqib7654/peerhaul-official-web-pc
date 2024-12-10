// 自动生成接口，请勿直接修改!!!
import type { MemberJobBidQueryPageRequest, MemberJobBidQueryPageResponse, MemberJobBidAcceptRequest, MemberJobBidAcceptResponse, MemberJobBidDetailRequest, MemberJobBidDetailResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** Paging job bid list */
export const queryPageApi = generateApi<MemberJobBidQueryPageRequest, MemberJobBidQueryPageResponse>('/member/jobBid/queryPage', 'POST')
/** accept bid */
export const acceptApi = generateApi<MemberJobBidAcceptRequest, MemberJobBidAcceptResponse>('/member/jobBid/accept', 'POST')
/** bid detail */
export const detailApi = generateApi<MemberJobBidDetailRequest, MemberJobBidDetailResponse>('/member/jobBid/detail', 'GET')