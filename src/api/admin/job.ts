// 自动生成接口，请勿直接修改!!!
import type { AdminJobQueryPageRequest, AdminJobQueryPageResponse, AdminJobDetailRequest, AdminJobDetailResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** query page */
export const queryPageApi = generateApi<AdminJobQueryPageRequest, AdminJobQueryPageResponse>('/admin/job/queryPage', 'POST')
/** detail */
export const detailApi = generateApi<AdminJobDetailRequest, AdminJobDetailResponse>('/admin/job/detail', 'GET')