// 自动生成接口，请勿直接修改!!!
import type { AdminParcelSizeQueryPageRequest, AdminParcelSizeQueryPageResponse, AdminParcelSizeSaveRequest, AdminParcelSizeSaveResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** query_page */
export const queryPageApi = generateApi<AdminParcelSizeQueryPageRequest, AdminParcelSizeQueryPageResponse>('/admin/parcelSize/queryPage', 'POST')
/** save parcel info */
export const saveApi = generateApi<AdminParcelSizeSaveRequest, AdminParcelSizeSaveResponse>('/admin/parcelSize/save', 'POST')