// 自动生成接口，请勿直接修改!!!
import type { AdminFeeSettingQueryPageRequest, AdminFeeSettingQueryPageResponse, AdminFeeSettingSaveRequest, AdminFeeSettingSaveResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** query_page */
export const queryPageApi = generateApi<AdminFeeSettingQueryPageRequest, AdminFeeSettingQueryPageResponse>('/admin/feeSetting/queryPage', 'POST')
/** save_fee */
export const saveApi = generateApi<AdminFeeSettingSaveRequest, AdminFeeSettingSaveResponse>('/admin/feeSetting/save', 'POST')