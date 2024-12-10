// 自动生成接口，请勿直接修改!!!
import type { DriverDriverReviewQueryPageRequest, DriverDriverReviewQueryPageResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** Paging review list for driver */
export const queryPageApi = generateApi<DriverDriverReviewQueryPageRequest, DriverDriverReviewQueryPageResponse>('/driver/driver/review/queryPage', 'POST')