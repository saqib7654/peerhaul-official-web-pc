import { generateApi } from "@/utils/http";
import {
  MemberFileUploadFileRequest,
  MemberFileUploadFileResponse
} from '.'

/** 上传 */
export const uploadFileApi = generateApi<{ file: File }, MemberFileUploadFileResponse>('/member/file/uploadFile', 'POST', {
  headers: {
    'Content-Type': 'multipart/form-data'
  }
})
