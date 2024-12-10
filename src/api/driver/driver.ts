// 自动生成接口，请勿直接修改!!!
import type { DriverDriverRegisterRequest, DriverDriverRegisterResponse, DriverDriverLoginRequest, DriverDriverLoginResponse, DriverDriverLogoutRequest, DriverDriverLogoutResponse, DriverDriverGetCurrentDriverInfoRequest, DriverDriverGetCurrentDriverInfoResponse, DriverDriverUpdateDriverInfoRequest, DriverDriverUpdateDriverInfoResponse, DriverDriverUpdatePwdRequest, DriverDriverUpdatePwdResponse, DriverDriverGetNotificationSettingRequest, DriverDriverGetNotificationSettingResponse, DriverDriverUpdateNotificationSettingRequest, DriverDriverUpdateNotificationSettingResponse, DriverDriverUpdatePwdOnlineRequest, DriverDriverUpdatePwdOnlineResponse, DriverDriverSendVerifyCodeRequest, DriverDriverSendVerifyCodeResponse, DriverDriverUpdateFcmTokenRequest, DriverDriverUpdateFcmTokenResponse, DriverDriverBindStripeRequest, DriverDriverBindStripeResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** register */
export const registerApi = generateApi<DriverDriverRegisterRequest, DriverDriverRegisterResponse>('/driver/driver/register', 'POST')
/** login */
export const loginApi = generateApi<DriverDriverLoginRequest, DriverDriverLoginResponse>('/driver/driver/login', 'POST')
/** logout */
export const logoutApi = generateApi<DriverDriverLogoutRequest, DriverDriverLogoutResponse>('/driver/driver/logout', 'POST')
/** Obtain information about the current login user */
export const getCurrentDriverInfoApi = generateApi<DriverDriverGetCurrentDriverInfoRequest, DriverDriverGetCurrentDriverInfoResponse>('/driver/driver/getCurrentDriverInfo', 'GET')
/** Update the basic information about the current login user */
export const updateDriverInfoApi = generateApi<DriverDriverUpdateDriverInfoRequest, DriverDriverUpdateDriverInfoResponse>('/driver/driver/updateDriverInfo', 'POST')
/** Change the password using the email address */
export const updatePwdApi = generateApi<DriverDriverUpdatePwdRequest, DriverDriverUpdatePwdResponse>('/driver/driver/updatePwd', 'POST')
/** Get notification setting */
export const getNotificationSettingApi = generateApi<DriverDriverGetNotificationSettingRequest, DriverDriverGetNotificationSettingResponse>('/driver/driver/getNotificationSetting', 'GET')
/** Modify notification setting */
export const updateNotificationSettingApi = generateApi<DriverDriverUpdateNotificationSettingRequest, DriverDriverUpdateNotificationSettingResponse>('/driver/driver/updateNotificationSetting', 'POST')
/** Change the password online */
export const updatePwdOnlineApi = generateApi<DriverDriverUpdatePwdOnlineRequest, DriverDriverUpdatePwdOnlineResponse>('/driver/driver/updatePwdOnline', 'POST')
/** send verify code */
export const sendVerifyCodeApi = generateApi<DriverDriverSendVerifyCodeRequest, DriverDriverSendVerifyCodeResponse>('/driver/driver/sendVerifyCode', 'POST')
/** update FCM token */
export const updateFcmTokenApi = generateApi<DriverDriverUpdateFcmTokenRequest, DriverDriverUpdateFcmTokenResponse>('/driver/driver/updateFCMToken', 'POST')
/** bind stripe account */
export const bindStripeApi = generateApi<DriverDriverBindStripeRequest, DriverDriverBindStripeResponse>('/driver/driver/bindStripe', 'POST')