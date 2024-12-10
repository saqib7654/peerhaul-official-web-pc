// 自动生成接口，请勿直接修改!!!
import type { AdminAdminLoginRequest, AdminAdminLoginResponse, AdminAdminLogoutRequest, AdminAdminLogoutResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** login */
export const loginApi = generateApi<AdminAdminLoginRequest, AdminAdminLoginResponse>('/admin/admin/login', 'POST')
/** login_out */
export const logoutApi = generateApi<AdminAdminLogoutRequest, AdminAdminLogoutResponse>('/admin/admin/logout', 'POST')