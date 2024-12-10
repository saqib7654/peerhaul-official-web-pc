// 自动生成接口，请勿直接修改!!!
import type { MemberJobTemplateGetTemplateListRequest, MemberJobTemplateGetTemplateListResponse, MemberJobTemplateDetailRequest, MemberJobTemplateDetailResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** job template list */
export const getTemplateListApi = generateApi<MemberJobTemplateGetTemplateListRequest, MemberJobTemplateGetTemplateListResponse>('/member/jobTemplate/getTemplateList', 'GET')
/** job template detail */
export const detailApi = generateApi<MemberJobTemplateDetailRequest, MemberJobTemplateDetailResponse>('/member/jobTemplate/detail', 'GET')