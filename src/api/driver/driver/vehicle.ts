// 自动生成接口，请勿直接修改!!!
import type { DriverDriverVehicleSaveRequest, DriverDriverVehicleSaveResponse, DriverDriverVehicleGetInfoRequest, DriverDriverVehicleGetInfoResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** save vehicle for driver */
export const saveApi = generateApi<DriverDriverVehicleSaveRequest, DriverDriverVehicleSaveResponse>('/driver/driver/vehicle/save', 'POST')
/** get vehicle info for driver */
export const getInfoApi = generateApi<DriverDriverVehicleGetInfoRequest, DriverDriverVehicleGetInfoResponse>('/driver/driver/vehicle/getInfo', 'GET')