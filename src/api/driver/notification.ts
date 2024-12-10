// 自动生成接口，请勿直接修改!!!
import type { DriverNotificationQueryPageRequest, DriverNotificationQueryPageResponse, DriverNotificationGetUpdatePickupWindowInfoRequest, DriverNotificationGetUpdatePickupWindowInfoResponse, DriverNotificationGetUnReadCountRequest, DriverNotificationGetUnReadCountResponse, DriverNotificationReadRequest, DriverNotificationReadResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** Paging notification */
export const queryPageApi = generateApi<DriverNotificationQueryPageRequest, DriverNotificationQueryPageResponse>('/driver/notification/queryPage', 'POST')
/** get update pickup window info */
export const getUpdatePickupWindowInfoApi = generateApi<DriverNotificationGetUpdatePickupWindowInfoRequest, DriverNotificationGetUpdatePickupWindowInfoResponse>('/driver/notification/getUpdatePickupWindowInfo', 'GET')
/** get count of unread notification */
export const getUnReadCountApi = generateApi<DriverNotificationGetUnReadCountRequest, DriverNotificationGetUnReadCountResponse>('/driver/notification/getUnReadCount', 'GET')
/** read notification */
export const readApi = generateApi<DriverNotificationReadRequest, DriverNotificationReadResponse>('/driver/notification/read', 'POST')