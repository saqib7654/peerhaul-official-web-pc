// 自动生成接口，请勿直接修改!!!
import type { AdminDriverQueryPageRequest, AdminDriverQueryPageResponse, AdminDriverRemoveRequest, AdminDriverRemoveResponse, AdminDriverUpdateBlockRequest, AdminDriverUpdateBlockResponse, AdminDriverGetDetailRequest, AdminDriverGetDetailResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** query page */
export const queryPageApi = generateApi<AdminDriverQueryPageRequest, AdminDriverQueryPageResponse>('/admin/driver/queryPage', 'POST')
/** remove driver */
export const removeApi = generateApi<AdminDriverRemoveRequest, AdminDriverRemoveResponse>('/admin/driver/remove', 'POST')
/** update block */
export const updateBlockApi = generateApi<AdminDriverUpdateBlockRequest, AdminDriverUpdateBlockResponse>('/admin/driver/updateBlock', 'POST')
/** get detail */
export const getDetailApi = generateApi<AdminDriverGetDetailRequest, AdminDriverGetDetailResponse>('/admin/driver/getDetail', 'GET')