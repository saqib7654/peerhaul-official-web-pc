// 自动生成接口，请勿直接修改!!!
import type { AdminLargeDisclaimerSaveRequest, AdminLargeDisclaimerSaveResponse, AdminLargeDisclaimerGetRequest, AdminLargeDisclaimerGetResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** save */
export const saveApi = generateApi<AdminLargeDisclaimerSaveRequest, AdminLargeDisclaimerSaveResponse>('/admin/largeDisclaimer/save', 'POST')
/** get */
export const getApi = generateApi<AdminLargeDisclaimerGetRequest, AdminLargeDisclaimerGetResponse>('/admin/largeDisclaimer/get', 'GET')