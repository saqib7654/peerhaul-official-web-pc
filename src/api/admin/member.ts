// 自动生成接口，请勿直接修改!!!
import type { AdminMemberQueryPageRequest, AdminMemberQueryPageResponse, AdminMemberRemoveRequest, AdminMemberRemoveResponse, AdminMemberUpdateBlockRequest, AdminMemberUpdateBlockResponse, AdminMemberGetDetailRequest, AdminMemberGetDetailResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** query page */
export const queryPageApi = generateApi<AdminMemberQueryPageRequest, AdminMemberQueryPageResponse>('/admin/member/queryPage', 'POST')
/** remove customer */
export const removeApi = generateApi<AdminMemberRemoveRequest, AdminMemberRemoveResponse>('/admin/member/remove', 'POST')
/** update block */
export const updateBlockApi = generateApi<AdminMemberUpdateBlockRequest, AdminMemberUpdateBlockResponse>('/admin/member/updateBlock', 'POST')
/** get detail */
export const getDetailApi = generateApi<AdminMemberGetDetailRequest, AdminMemberGetDetailResponse>('/admin/member/getDetail', 'GET')