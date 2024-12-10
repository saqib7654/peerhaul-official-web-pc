// 自动生成接口，请勿直接修改!!!
import type { AdminDriverVehicleQueryPageRequest, AdminDriverVehicleQueryPageResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** query page */
export const queryPageApi = generateApi<AdminDriverVehicleQueryPageRequest, AdminDriverVehicleQueryPageResponse>('/admin/driverVehicle/queryPage', 'POST')