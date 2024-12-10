// 自动生成接口，请勿直接修改!!!
import type { DriverFileUploadFileRequest, DriverFileUploadFileResponse } from '@/api'
import { generateApi } from '@/utils/http'
/** upload file */
export const uploadFileApi = generateApi<DriverFileUploadFileRequest, DriverFileUploadFileResponse>('/driver/file/uploadFile', 'POST')