// 自动生成接口，请勿直接修改!!!
import type { AdminShippingInsuranceSaveRequest, AdminShippingInsuranceSaveResponse, AdminShippingInsuranceGetRequest, AdminShippingInsuranceGetResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** save */
export const saveApi = generateApi<AdminShippingInsuranceSaveRequest, AdminShippingInsuranceSaveResponse>('/admin/shippingInsurance/save', 'POST')
/** get */
export const getApi = generateApi<AdminShippingInsuranceGetRequest, AdminShippingInsuranceGetResponse>('/admin/shippingInsurance/get', 'GET')