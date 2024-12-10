// 自动生成接口，请勿直接修改!!!
import type { AdminLiabilityInsuranceSaveRequest, AdminLiabilityInsuranceSaveResponse, AdminLiabilityInsuranceGetRequest, AdminLiabilityInsuranceGetResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** save */
export const saveApi = generateApi<AdminLiabilityInsuranceSaveRequest, AdminLiabilityInsuranceSaveResponse>('/admin/liabilityInsurance/save', 'POST')
/** get */
export const getApi = generateApi<AdminLiabilityInsuranceGetRequest, AdminLiabilityInsuranceGetResponse>('/admin/liabilityInsurance/get', 'GET')