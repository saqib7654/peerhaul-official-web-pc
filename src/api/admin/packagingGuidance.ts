// 自动生成接口，请勿直接修改!!!
import type { AdminPackagingGuidanceSaveRequest, AdminPackagingGuidanceSaveResponse, AdminPackagingGuidanceGetRequest, AdminPackagingGuidanceGetResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** save */
export const saveApi = generateApi<AdminPackagingGuidanceSaveRequest, AdminPackagingGuidanceSaveResponse>('/admin/packagingGuidance/save', 'POST')
/** get */
export const getApi = generateApi<AdminPackagingGuidanceGetRequest, AdminPackagingGuidanceGetResponse>('/admin/packagingGuidance/get', 'GET')