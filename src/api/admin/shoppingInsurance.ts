// 自动生成接口，请勿直接修改!!!
import type { AdminShoppingInsuranceSaveRequest, AdminShoppingInsuranceSaveResponse, AdminShoppingInsuranceGetRequest, AdminShoppingInsuranceGetResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** save */
export const saveApi = generateApi<AdminShoppingInsuranceSaveRequest, AdminShoppingInsuranceSaveResponse>('/admin/shoppingInsurance/save', 'POST')
/** get */
export const getApi = generateApi<AdminShoppingInsuranceGetRequest, AdminShoppingInsuranceGetResponse>('/admin/shoppingInsurance/get', 'GET')