// 自动生成接口，请勿直接修改!!!
import type { DriverJobBidSubmitRequest, DriverJobBidSubmitResponse, DriverJobBidUpdateRequest, DriverJobBidUpdateResponse, DriverJobBidQueryPageRequest, DriverJobBidQueryPageResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** submit bid */
export const submitApi = generateApi<DriverJobBidSubmitRequest, DriverJobBidSubmitResponse>('/driver/job/bid/submit', 'POST')
/** update bid */
export const updateApi = generateApi<DriverJobBidUpdateRequest, DriverJobBidUpdateResponse>('/driver/job/bid/update', 'POST')
/** Paging bid list */
export const queryPageApi = generateApi<DriverJobBidQueryPageRequest, DriverJobBidQueryPageResponse>('/driver/job/bid/queryPage', 'POST')