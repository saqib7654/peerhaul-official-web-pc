// 自动生成接口，请勿直接修改!!!
import type { DriverNotificationUpdateJobHandleRequest, DriverNotificationUpdateJobHandleResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** handle member edit job info */
export const handleApi = generateApi<DriverNotificationUpdateJobHandleRequest, DriverNotificationUpdateJobHandleResponse>('/driver/notification/updateJob/handle', 'POST')