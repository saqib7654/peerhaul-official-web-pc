// 自动生成接口，请勿直接修改!!!
import type { DriverVehicleTypeGetVehicleTypeListRequest, DriverVehicleTypeGetVehicleTypeListResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** query vehicle type list */
export const getVehicleTypeListApi = generateApi<DriverVehicleTypeGetVehicleTypeListRequest, DriverVehicleTypeGetVehicleTypeListResponse>('/driver/vehicleType/getVehicleTypeList', 'GET')