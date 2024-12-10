// 自动生成接口，请勿直接修改!!!
import type { DriverCardCreditGetListRequest, DriverCardCreditGetListResponse, DriverCardCreditAddRequest, DriverCardCreditAddResponse, DriverCardCreditDeleteRequest, DriverCardCreditDeleteResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** credit card list */
export const getListApi = generateApi<DriverCardCreditGetListRequest, DriverCardCreditGetListResponse>('/driver/card/credit/getList', 'GET')
/** add a credit card */
export const addApi = generateApi<DriverCardCreditAddRequest, DriverCardCreditAddResponse>('/driver/card/credit/add', 'POST')
/** delete the credit card */
export const deleteApi = generateApi<DriverCardCreditDeleteRequest, DriverCardCreditDeleteResponse>('/driver/card/credit/delete', 'POST')