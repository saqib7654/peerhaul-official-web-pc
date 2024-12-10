// 自动生成接口，请勿直接修改!!!
import type { AdminPrivacyPolicySaveRequest, AdminPrivacyPolicySaveResponse, AdminPrivacyPolicyGetRequest, AdminPrivacyPolicyGetResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** save */
export const saveApi = generateApi<AdminPrivacyPolicySaveRequest, AdminPrivacyPolicySaveResponse>('/admin/privacyPolicy/save', 'POST')
/** get */
export const getApi = generateApi<AdminPrivacyPolicyGetRequest, AdminPrivacyPolicyGetResponse>('/admin/privacyPolicy/get', 'GET')