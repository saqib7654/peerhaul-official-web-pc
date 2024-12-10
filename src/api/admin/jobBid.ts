// 自动生成接口，请勿直接修改!!!
import type { AdminJobBidQueryPageRequest, AdminJobBidQueryPageResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** query page */
export const queryPageApi = generateApi<AdminJobBidQueryPageRequest, AdminJobBidQueryPageResponse>('/admin/jobBid/queryPage', 'POST')