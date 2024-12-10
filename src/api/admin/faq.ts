// 自动生成接口，请勿直接修改!!!
import type { AdminFaqAddRequest, AdminFaqAddResponse, AdminFaqModifyRequest, AdminFaqModifyResponse, AdminFaqRemoveRequest, AdminFaqRemoveResponse, AdminFaqQueryPageRequest, AdminFaqQueryPageResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** add_faq */
export const addApi = generateApi<AdminFaqAddRequest, AdminFaqAddResponse>('/admin/faq/add', 'POST')
/** modify_faq */
export const modifyApi = generateApi<AdminFaqModifyRequest, AdminFaqModifyResponse>('/admin/faq/modify', 'POST')
/** remove_faq */
export const removeApi = generateApi<AdminFaqRemoveRequest, AdminFaqRemoveResponse>('/admin/faq/remove', 'POST')
/** query_page */
export const queryPageApi = generateApi<AdminFaqQueryPageRequest, AdminFaqQueryPageResponse>('/admin/faq/queryPage', 'POST')