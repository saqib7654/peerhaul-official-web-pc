// 自动生成接口，请勿直接修改!!!
import type { AdminDashboardGetRequest, AdminDashboardGetResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** get dashboard */
export const getApi = generateApi<AdminDashboardGetRequest, AdminDashboardGetResponse>('/admin/dashboard/get', 'GET')