// 自动生成接口，请勿直接修改!!!
import type { DriverJobCollectQueryPageRequest, DriverJobCollectQueryPageResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** saved & matched */
export const queryPageApi = generateApi<DriverJobCollectQueryPageRequest, DriverJobCollectQueryPageResponse>('/driver/job/collect/queryPage', 'POST')