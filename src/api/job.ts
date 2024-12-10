import { generateApi } from '@/utils/http'
import {
  MemberParcelSizeGetParcelSizeListRequest,
  MemberParcelSizeGetParcelSizeListResponse,
  MemberJobComputeEstimatePriceRequest,
  MemberJobComputeEstimatePriceResponse,
  MemberJobQueryPageRequest,
  MemberJobQueryPageResponse,
  MemberJobCreateJobRequest,
  MemberJobCreateJobResponse,
  MemberJobDetailRequest,
  MemberJobDetailResponse,
  MemberJobDeliveryDetailRequest,
  MemberJobDeliveryDetailResponse,
  MemberJobBidQueryPageRequest,
  MemberJobBidQueryPageResponse,
  MemberJobUpdateJobRequest,
  MemberJobUpdateJobResponse,
  MemberJobDeleteRequest,
  MemberJobDeleteResponse,
  MemberJobDriverNoShowRequest,
  MemberJobDriverNoShowResponse,
  MemberJobDeliverChartRequest,
  MemberJobDeliverChartResponse
} from '.'


/**
 * Get parcel size list
 */
export const getParcelSizeListApi = generateApi<
  MemberParcelSizeGetParcelSizeListRequest,
  MemberParcelSizeGetParcelSizeListResponse
>('/member/parcelSize/getParcelSizeList', 'GET')

/**
 * compute estimate price
 */
export const computeEstimatePriceApi = generateApi<
  MemberJobComputeEstimatePriceRequest,
  MemberJobComputeEstimatePriceResponse
>('/member/job/computeEstimatePrice', 'POST')


/**
 * my-listings list 
 */
export const getMyJobListApi = generateApi<
  MemberJobQueryPageRequest,
  MemberJobQueryPageResponse
>('/member/job/queryPage', 'POST')

/**
 * createJob
 */
export const createJobApi = generateApi<
  MemberJobCreateJobRequest,
  MemberJobCreateJobResponse
>('/member/job/createJob', 'POST')

/**
 * Job detail
 */
export const getJobDetailApi = generateApi<
  MemberJobDetailRequest,
  MemberJobDetailResponse
>('/member/job/detail', 'GET')

/**
 * delivery detail
 */
export const getDeliveryDetailApi = generateApi<
  MemberJobDeliveryDetailRequest,
  MemberJobDeliveryDetailResponse
>('/member/job/deliveryDetail', 'GET')

/**
 * jobBid list
 */
export const getJobBidListApi = generateApi<
  MemberJobBidQueryPageRequest,
  MemberJobBidQueryPageResponse
>('/member/jobBid/queryPage', 'POST')

/**
 * updateJob
 */
export const updateJobApi = generateApi<
  MemberJobUpdateJobRequest,
  MemberJobUpdateJobResponse
>('/member/job/updateJob', 'POST')

/**
 * deleteJob
 */
export const deleteJobApi = generateApi<
  MemberJobDeleteRequest,
  MemberJobDeleteResponse
>('/member/job/delete', 'POST')

/**
 * driverNoShow
 */
export const driverNoShowApi = generateApi<
  MemberJobDriverNoShowRequest,
  MemberJobDriverNoShowResponse
>('/member/job/driverNoShow', 'POST')

/**
 * deliverChart
 */
export const getDeliverChartApi = generateApi<
  MemberJobDeliverChartRequest,
  MemberJobDeliverChartResponse
>('/member/job/deliverChart', 'GET')


