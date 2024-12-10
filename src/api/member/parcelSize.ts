// 自动生成接口，请勿直接修改!!!
import type { MemberParcelSizeGetParcelSizeListRequest, MemberParcelSizeGetParcelSizeListResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** Get parcel size list */
export const getParcelSizeListApi = generateApi<MemberParcelSizeGetParcelSizeListRequest, MemberParcelSizeGetParcelSizeListResponse>('/member/parcelSize/getParcelSizeList', 'GET')