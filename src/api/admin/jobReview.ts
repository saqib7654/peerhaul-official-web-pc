// 自动生成接口，请勿直接修改!!!
import type { AdminJobReviewQueryPageRequest, AdminJobReviewQueryPageResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** query page */
export const queryPageApi = generateApi<AdminJobReviewQueryPageRequest, AdminJobReviewQueryPageResponse>('/admin/jobReview/queryPage', 'POST')