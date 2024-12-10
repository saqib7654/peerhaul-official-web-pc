// 自动生成接口，请勿直接修改!!!
import type { DriverCardDebitGetCardListRequest, DriverCardDebitGetCardListResponse, DriverCardDebitAddRequest, DriverCardDebitAddResponse, DriverCardDebitDeleteRequest, DriverCardDebitDeleteResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** debit card list */
export const getCardListApi = generateApi<DriverCardDebitGetCardListRequest, DriverCardDebitGetCardListResponse>('/driver/card/debit/getCardList', 'GET')
/** add a debit card */
export const addApi = generateApi<DriverCardDebitAddRequest, DriverCardDebitAddResponse>('/driver/card/debit/add', 'POST')
/** delete the debit card */
export const deleteApi = generateApi<DriverCardDebitDeleteRequest, DriverCardDebitDeleteResponse>('/driver/card/debit/delete', 'POST')