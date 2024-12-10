// 自动生成接口，请勿直接修改!!!
import type { DriverJobQueryAllPageRequest, DriverJobQueryAllPageResponse, DriverJobQuerySearchPageRequest, DriverJobQuerySearchPageResponse, DriverJobDetailRequest, DriverJobDetailResponse, DriverJobCompletePickupRequest, DriverJobCompletePickupResponse, DriverJobCompleteDeliveryRequest, DriverJobCompleteDeliveryResponse, DriverJobCompleteDropOffRequest, DriverJobCompleteDropOffResponse, DriverJobCancelRequest, DriverJobCancelResponse, DriverJobDeliveryDetailRequest, DriverJobDeliveryDetailResponse, DriverJobAcceptRequest, DriverJobAcceptResponse, DriverJobCollectOrCancelRequest, DriverJobCollectOrCancelResponse, DriverJobDeliveryChartRequest, DriverJobDeliveryChartResponse, DriverJobViewsAddRequest, DriverJobViewsAddResponse, DriverJobCheckDistanceRequest, DriverJobCheckDistanceResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** all */
export const queryAllPageApi = generateApi<DriverJobQueryAllPageRequest, DriverJobQueryAllPageResponse>('/driver/job/queryAllPage', 'POST')
/** job search */
export const querySearchPageApi = generateApi<DriverJobQuerySearchPageRequest, DriverJobQuerySearchPageResponse>('/driver/job/querySearchPage', 'POST')
/** detail */
export const detailApi = generateApi<DriverJobDetailRequest, DriverJobDetailResponse>('/driver/job/detail', 'GET')
/** complete pickup */
export const completePickupApi = generateApi<DriverJobCompletePickupRequest, DriverJobCompletePickupResponse>('/driver/job/completePickup', 'POST')
/** complete delivery */
export const completeDeliveryApi = generateApi<DriverJobCompleteDeliveryRequest, DriverJobCompleteDeliveryResponse>('/driver/job/completeDelivery', 'POST')
/** complete drop off */
export const completeDropOffApi = generateApi<DriverJobCompleteDropOffRequest, DriverJobCompleteDropOffResponse>('/driver/job/completeDropOff', 'POST')
/** cancel job */
export const cancelApi = generateApi<DriverJobCancelRequest, DriverJobCancelResponse>('/driver/job/cancel', 'POST')
/** delivery detail */
export const deliveryDetailApi = generateApi<DriverJobDeliveryDetailRequest, DriverJobDeliveryDetailResponse>('/driver/job/deliveryDetail', 'GET')
/** accept job */
export const acceptApi = generateApi<DriverJobAcceptRequest, DriverJobAcceptResponse>('/driver/job/accept', 'POST')
/** collect or cancel */
export const collectOrCancelApi = generateApi<DriverJobCollectOrCancelRequest, DriverJobCollectOrCancelResponse>('/driver/job/collectOrCancel', 'POST')
/** deliver chart */
export const deliveryChartApi = generateApi<DriverJobDeliveryChartRequest, DriverJobDeliveryChartResponse>('/driver/job/deliveryChart', 'POST')
/** views add */
export const viewsAddApi = generateApi<DriverJobViewsAddRequest, DriverJobViewsAddResponse>('/driver/job/viewsAdd', 'POST')
/** check distance */
export const checkDistanceApi = generateApi<DriverJobCheckDistanceRequest, DriverJobCheckDistanceResponse>('/driver/job/checkDistance', 'POST')