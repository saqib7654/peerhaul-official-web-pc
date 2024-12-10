// 自动生成接口，请勿直接修改!!!
import type { DriverSearchConditionSaveRequest, DriverSearchConditionSaveResponse, DriverSearchConditionGetSearchConditionRequest, DriverSearchConditionGetSearchConditionResponse, DriverSearchConditionDeleteRequest, DriverSearchConditionDeleteResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** save search condition */
export const saveApi = generateApi<DriverSearchConditionSaveRequest, DriverSearchConditionSaveResponse>('/driver/searchCondition/save', 'POST')
/** get search condition for driver */
export const getSearchConditionApi = generateApi<DriverSearchConditionGetSearchConditionRequest, DriverSearchConditionGetSearchConditionResponse>('/driver/searchCondition/getSearchCondition', 'GET')
/** delete the search condition for driver */
export const deleteApi = generateApi<DriverSearchConditionDeleteRequest, DriverSearchConditionDeleteResponse>('/driver/searchCondition/delete', 'POST')