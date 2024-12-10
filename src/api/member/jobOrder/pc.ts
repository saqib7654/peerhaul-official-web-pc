// 自动生成接口，请勿直接修改!!!
import type { MemberJobOrderPcQueryPageRequest, MemberJobOrderPcQueryPageResponse, MemberJobOrderPcExportRequest, MemberJobOrderPcExportResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** Paging transaction history by PC */
export const queryPageApi = generateApi<MemberJobOrderPcQueryPageRequest, MemberJobOrderPcQueryPageResponse>('/member/jobOrder/pc/queryPage', 'POST')
/** export transaction history by PC */
export const exportApi = generateApi<MemberJobOrderPcExportRequest, MemberJobOrderPcExportResponse>('/member/jobOrder/pc/export', 'POST')