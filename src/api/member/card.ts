// 自动生成接口，请勿直接修改!!!
import type { MemberCardQueryPageRequest, MemberCardQueryPageResponse, MemberCardAddRequest, MemberCardAddResponse, MemberCardDeleteRequest, MemberCardDeleteResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** card list */
export const queryPageApi = generateApi<MemberCardQueryPageRequest, MemberCardQueryPageResponse>('/member/card/queryPage', 'POST')
/** add card */
export const addApi = generateApi<MemberCardAddRequest, MemberCardAddResponse>('/member/card/add', 'POST')
/** delete card */
export const deleteApi = generateApi<MemberCardDeleteRequest, MemberCardDeleteResponse>('/member/card/delete', 'POST')