// 自动生成接口，请勿直接修改!!!
import type { MemberDriverDetailRequest, MemberDriverDetailResponse, MemberDriverQueryPageRequest, MemberDriverQueryPageResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** driver detail info */
export const detailApi = generateApi<MemberDriverDetailRequest, MemberDriverDetailResponse>('/member/driver/detail', 'GET')
/** Paging review list for driver */
export const queryPageApi = generateApi<MemberDriverQueryPageRequest, MemberDriverQueryPageResponse>('/member/driver/queryPage', 'POST')