// 自动生成接口，请勿直接修改!!!
import type { DriverJobOrderQueryPageRequest, DriverJobOrderQueryPageResponse, DriverJobOrderExportRequest, DriverJobOrderExportResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** paging job order list */
export const queryPageApi = generateApi<DriverJobOrderQueryPageRequest, DriverJobOrderQueryPageResponse>('/driver/jobOrder/queryPage', 'POST')
/** export transaction history */
export const exportApi = generateApi<DriverJobOrderExportRequest, DriverJobOrderExportResponse>('/driver/jobOrder/export', 'POST')