// 自动生成接口，请勿直接修改!!!
import type { AdminVehicleTypeQueryPageRequest, AdminVehicleTypeQueryPageResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** query_page */
export const queryPageApi = generateApi<AdminVehicleTypeQueryPageRequest, AdminVehicleTypeQueryPageResponse>('/admin/vehicleType/queryPage', 'POST')