// 自动生成接口，请勿直接修改!!!
import type { AdminPopupContentModifyRequest, AdminPopupContentModifyResponse, AdminPopupContentQueryPageRequest, AdminPopupContentQueryPageResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** modify_faq */
export const modifyApi = generateApi<AdminPopupContentModifyRequest, AdminPopupContentModifyResponse>('/admin/popupContent/modify', 'POST')
/** query_page */
export const queryPageApi = generateApi<AdminPopupContentQueryPageRequest, AdminPopupContentQueryPageResponse>('/admin/popupContent/queryPage', 'POST')