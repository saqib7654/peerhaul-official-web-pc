// 自动生成接口，请勿直接修改!!!
import type { MemberFileUploadFileRequest, MemberFileUploadFileResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** upload file */
export const uploadFileApi = generateApi<MemberFileUploadFileRequest, MemberFileUploadFileResponse>('/member/file/uploadFile', 'POST')