// 自动生成接口，请勿直接修改!!!
import type { AdminTermsAndConditionSaveRequest, AdminTermsAndConditionSaveResponse, AdminTermsAndConditionGetRequest, AdminTermsAndConditionGetResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** save */
export const saveApi = generateApi<AdminTermsAndConditionSaveRequest, AdminTermsAndConditionSaveResponse>('/admin/termsAndCondition/save', 'POST')
/** get_terms_and_condition */
export const getApi = generateApi<AdminTermsAndConditionGetRequest, AdminTermsAndConditionGetResponse>('/admin/termsAndCondition/get', 'GET')