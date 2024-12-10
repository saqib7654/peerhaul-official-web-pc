// 自动生成接口，请勿直接修改!!!
import type { MemberJobCreateJobRequest, MemberJobCreateJobResponse, MemberJobQueryPageRequest, MemberJobQueryPageResponse, MemberJobDetailRequest, MemberJobDetailResponse, MemberJobUpdatePickupWindowRequest, MemberJobUpdatePickupWindowResponse, MemberJobPickupRequest, MemberJobPickupResponse, MemberJobCompleteRequest, MemberJobCompleteResponse, MemberJobDeliverChartRequest, MemberJobDeliverChartResponse, MemberJobReviewRequest, MemberJobReviewResponse, MemberJobDeleteRequest, MemberJobDeleteResponse, MemberJobCancelRequest, MemberJobCancelResponse, MemberJobUpdateJobRequest, MemberJobUpdateJobResponse, MemberJobDriverNoShowRequest, MemberJobDriverNoShowResponse, MemberJobDeactivateRequest, MemberJobDeactivateResponse, MemberJobComputeEstimatePriceRequest, MemberJobComputeEstimatePriceResponse, MemberJobDeliveryDetailRequest, MemberJobDeliveryDetailResponse, MemberJobActivateRequest, MemberJobActivateResponse, MemberJobGetIndexJobListRequest, MemberJobGetIndexJobListResponse, MemberJobQueryAllJobPageRequest, MemberJobQueryAllJobPageResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** create job */
export const createJobApi = generateApi<MemberJobCreateJobRequest, MemberJobCreateJobResponse>('/member/job/createJob', 'POST')
/** Paging query job list */
export const queryPageApi = generateApi<MemberJobQueryPageRequest, MemberJobQueryPageResponse>('/member/job/queryPage', 'POST')
/** job detail */
export const detailApi = generateApi<MemberJobDetailRequest, MemberJobDetailResponse>('/member/job/detail', 'GET')
/** modify pickup window */
export const updatePickupWindowApi = generateApi<MemberJobUpdatePickupWindowRequest, MemberJobUpdatePickupWindowResponse>('/member/job/updatePickupWindow', 'POST')
/** confirm ready for pickup */
export const pickupApi = generateApi<MemberJobPickupRequest, MemberJobPickupResponse>('/member/job/pickup', 'POST')
/** complete */
export const completeApi = generateApi<MemberJobCompleteRequest, MemberJobCompleteResponse>('/member/job/complete', 'POST')
/** my peerhaul deliveries */
export const deliverChartApi = generateApi<MemberJobDeliverChartRequest, MemberJobDeliverChartResponse>('/member/job/deliverChart', 'GET')
/** review driver */
export const reviewApi = generateApi<MemberJobReviewRequest, MemberJobReviewResponse>('/member/job/review', 'POST')
/** delete job */
export const deleteApi = generateApi<MemberJobDeleteRequest, MemberJobDeleteResponse>('/member/job/delete', 'POST')
/** cancel job */
export const cancelApi = generateApi<MemberJobCancelRequest, MemberJobCancelResponse>('/member/job/cancel', 'POST')
/** update job */
export const updateJobApi = generateApi<MemberJobUpdateJobRequest, MemberJobUpdateJobResponse>('/member/job/updateJob', 'POST')
/** driver no show */
export const driverNoShowApi = generateApi<MemberJobDriverNoShowRequest, MemberJobDriverNoShowResponse>('/member/job/driverNoShow', 'POST')
/** deactivate */
export const deactivateApi = generateApi<MemberJobDeactivateRequest, MemberJobDeactivateResponse>('/member/job/deactivate', 'POST')
/** compute estimate price */
export const computeEstimatePriceApi = generateApi<MemberJobComputeEstimatePriceRequest, MemberJobComputeEstimatePriceResponse>('/member/job/computeEstimatePrice', 'POST')
/** delivery detail */
export const deliveryDetailApi = generateApi<MemberJobDeliveryDetailRequest, MemberJobDeliveryDetailResponse>('/member/job/deliveryDetail', 'GET')
/** activate */
export const activateApi = generateApi<MemberJobActivateRequest, MemberJobActivateResponse>('/member/job/activate', 'POST')
/** index job list */
export const getIndexJobListApi = generateApi<MemberJobGetIndexJobListRequest, MemberJobGetIndexJobListResponse>('/member/job/getIndexJobList', 'GET')
/** Paging query all job list */
export const queryAllJobPageApi = generateApi<MemberJobQueryAllJobPageRequest, MemberJobQueryAllJobPageResponse>('/member/job/queryAllJobPage', 'POST')