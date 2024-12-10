// 自动生成接口，请勿直接修改!!!
import type { DriverJobDeliveryQueryPageRequest, DriverJobDeliveryQueryPageResponse, DriverJobDeliveryMyBidsRequest, DriverJobDeliveryMyBidsResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** my deliveries : my jobs/completed */
export const queryPageApi = generateApi<DriverJobDeliveryQueryPageRequest, DriverJobDeliveryQueryPageResponse>('/driver/job/delivery/queryPage', 'POST')
/** my deliveries: my bids */
export const myBidsApi = generateApi<DriverJobDeliveryMyBidsRequest, DriverJobDeliveryMyBidsResponse>('/driver/job/delivery/myBids', 'POST')