// 自动生成接口，请勿直接修改!!!
import type { AdminDeadlineQueryPageRequest, AdminDeadlineQueryPageResponse, AdminDeadlineModifyRequest, AdminDeadlineModifyResponse, AdminDeadlineRemoveRequest, AdminDeadlineRemoveResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** query page */
export const queryPageApi = generateApi<AdminDeadlineQueryPageRequest, AdminDeadlineQueryPageResponse>('/admin/deadline/queryPage', 'POST')
/** modify deadline */
export const modifyApi = generateApi<AdminDeadlineModifyRequest, AdminDeadlineModifyResponse>('/admin/deadline/modify', 'POST')
/** remove_faq */
export const removeApi = generateApi<AdminDeadlineRemoveRequest, AdminDeadlineRemoveResponse>('/admin/deadline/remove', 'POST')