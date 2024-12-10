// 自动生成接口，请勿直接修改!!!
import type { MemberMemberRegisterRequest, MemberMemberRegisterResponse, MemberMemberLoginRequest, MemberMemberLoginResponse, MemberMemberLogoutRequest, MemberMemberLogoutResponse, MemberMemberGetCurrentMemberInfoRequest, MemberMemberGetCurrentMemberInfoResponse, MemberMemberUpdateMemberInfoRequest, MemberMemberUpdateMemberInfoResponse, MemberMemberUpdatePwdRequest, MemberMemberUpdatePwdResponse, MemberMemberGetNotificationSettingRequest, MemberMemberGetNotificationSettingResponse, MemberMemberUpdateNotificationSettingRequest, MemberMemberUpdateNotificationSettingResponse, MemberMemberUpdatePwdOnlineRequest, MemberMemberUpdatePwdOnlineResponse, MemberMemberSendVerifyCodeRequest, MemberMemberSendVerifyCodeResponse, MemberMemberUpdateFcmTokenRequest, MemberMemberUpdateFcmTokenResponse, MemberMemberUpdatePwdByCodeRequest, MemberMemberUpdatePwdByCodeResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** register */
export const registerApi = generateApi<MemberMemberRegisterRequest, MemberMemberRegisterResponse>('/member/member/register', 'POST')
/** login */
export const loginApi = generateApi<MemberMemberLoginRequest, MemberMemberLoginResponse>('/member/member/login', 'POST')
/** logout */
export const logoutApi = generateApi<MemberMemberLogoutRequest, MemberMemberLogoutResponse>('/member/member/logout', 'POST')
/** Obtain information about the current login user */
export const getCurrentMemberInfoApi = generateApi<MemberMemberGetCurrentMemberInfoRequest, MemberMemberGetCurrentMemberInfoResponse>('/member/member/getCurrentMemberInfo', 'GET')
/** Update the basic information about the current login user */
export const updateMemberInfoApi = generateApi<MemberMemberUpdateMemberInfoRequest, MemberMemberUpdateMemberInfoResponse>('/member/member/updateMemberInfo', 'POST')
/** Change the password using the email address */
export const updatePwdApi = generateApi<MemberMemberUpdatePwdRequest, MemberMemberUpdatePwdResponse>('/member/member/updatePwd', 'POST')
/** Get notification setting */
export const getNotificationSettingApi = generateApi<MemberMemberGetNotificationSettingRequest, MemberMemberGetNotificationSettingResponse>('/member/member/getNotificationSetting', 'GET')
/** Update notification setting */
export const updateNotificationSettingApi = generateApi<MemberMemberUpdateNotificationSettingRequest, MemberMemberUpdateNotificationSettingResponse>('/member/member/updateNotificationSetting', 'POST')
/** Change the password online */
export const updatePwdOnlineApi = generateApi<MemberMemberUpdatePwdOnlineRequest, MemberMemberUpdatePwdOnlineResponse>('/member/member/updatePwdOnline', 'POST')
/** send verify code */
export const sendVerifyCodeApi = generateApi<MemberMemberSendVerifyCodeRequest, MemberMemberSendVerifyCodeResponse>('/member/member/sendVerifyCode', 'POST')
/** update FCM token */
export const updateFcmTokenApi = generateApi<MemberMemberUpdateFcmTokenRequest, MemberMemberUpdateFcmTokenResponse>('/member/member/updateFCMToken', 'POST')
/** update password by email link */
export const updatePwdByCodeApi = generateApi<MemberMemberUpdatePwdByCodeRequest, MemberMemberUpdatePwdByCodeResponse>('/member/member/updatePwdByCode', 'POST')