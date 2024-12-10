// 自动生成接口，请勿直接修改!!!
import type { AdminJobOrderQueryPageRequest, AdminJobOrderQueryPageResponse, AdminJobOrderStripeQueryPageRequest, AdminJobOrderStripeQueryPageResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** Paging transaction history */
export const queryPageApi = generateApi<AdminJobOrderQueryPageRequest, AdminJobOrderQueryPageResponse>('/admin/jobOrder/queryPage', 'POST')
/** Paging stripe transaction list */
export const stripeQueryPageApi = generateApi<AdminJobOrderStripeQueryPageRequest, AdminJobOrderStripeQueryPageResponse>('/admin/jobOrder/stripeQueryPage', 'POST')