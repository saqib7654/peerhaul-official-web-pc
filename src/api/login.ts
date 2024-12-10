import { generateApi } from '@/utils/http'
import {
  MemberMemberLoginRequest,
  MemberMemberLoginResponse,
  MemberMemberLogoutRequest,
  MemberMemberLogoutResponse,
  MemberMemberRegisterRequest,
  MemberMemberRegisterResponse,
  MemberMemberUpdatePwdRequest,
  MemberMemberUpdatePwdResponse,
  MemberMemberUpdatePwdOnlineRequest,
  MemberMemberUpdatePwdOnlineResponse
} from '.'


/**
 * 登录
 */

export const loginApi = generateApi<
  MemberMemberLoginRequest,
  MemberMemberLoginResponse
>('/member/member/login', 'POST')

/**
 * 退出登录
 */
export const logoutApi = generateApi<
  MemberMemberLogoutRequest,
  MemberMemberLogoutResponse
>('/member/member/logout', 'POST')

/**
 * register
 */
export const registerApi = generateApi<
  MemberMemberRegisterRequest,
  MemberMemberRegisterResponse
>('/member/member/register', 'POST')

/**
 * updatePwd
 */
export const updatePwdApi = generateApi<
  MemberMemberUpdatePwdRequest,
  MemberMemberUpdatePwdResponse
>('/member/member/updatePwd', 'POST')

/**
 * updatePwdOnline
 */
export const updatePwdOnlineApi = generateApi<
  MemberMemberUpdatePwdOnlineRequest,
  MemberMemberUpdatePwdOnlineResponse
>('/member/member/updatePwdOnline', 'POST')
