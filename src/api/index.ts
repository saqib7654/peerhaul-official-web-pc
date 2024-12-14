/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
type FileData = File

/**
 * 接口 [query vehicle type list↗](http://192.168.2.9:3000/project/17/interface/api/6492) 的 **请求类型**
 *
 * @分类 [Vehicle type↗](http://192.168.2.9:3000/project/17/interface/api/cat_1069)
 * @请求头 `GET /driver/vehicleType/getVehicleTypeList`
 * @更新时间 `2023-12-04 17:08:10`
 */
export interface DriverVehicleTypeGetVehicleTypeListRequest {}

/**
 * 接口 [query vehicle type list↗](http://192.168.2.9:3000/project/17/interface/api/6492) 的 **返回类型**
 *
 * @分类 [Vehicle type↗](http://192.168.2.9:3000/project/17/interface/api/cat_1069)
 * @请求头 `GET /driver/vehicleType/getVehicleTypeList`
 * @更新时间 `2023-12-04 17:08:10`
 */
export type DriverVehicleTypeGetVehicleTypeListResponse = {
  typeName?: string
}[]

/**
 * 接口 [upload file↗](http://192.168.2.9:3000/project/17/interface/api/6814) 的 **请求类型**
 *
 * @分类 [file↗](http://192.168.2.9:3000/project/17/interface/api/cat_1139)
 * @请求头 `POST /driver/file/uploadFile`
 * @更新时间 `2023-12-14 17:10:00`
 */
export interface DriverFileUploadFileRequest {
  file?: FileData
}

/**
 * 接口 [upload file↗](http://192.168.2.9:3000/project/17/interface/api/6814) 的 **返回类型**
 *
 * @分类 [file↗](http://192.168.2.9:3000/project/17/interface/api/cat_1139)
 * @请求头 `POST /driver/file/uploadFile`
 * @更新时间 `2023-12-14 17:10:00`
 */
export interface DriverFileUploadFileResponse {
  /**
   * 文件名称
   */
  fileName?: string
  /**
   * 地址
   */
  url?: string
}

/**
 * 接口 [send sms↗](http://192.168.2.9:3000/project/17/interface/api/10431) 的 **请求类型**
 *
 * @分类 [common tool↗](http://192.168.2.9:3000/project/17/interface/api/cat_1693)
 * @请求头 `POST /driver/common/sendMsg`
 * @更新时间 `2024-06-21 09:10:08`
 */
export interface DriverCommonSendMsgRequest {
  /**
   * REGISTER,LOGIN,FORGET_PWD
   */
  type: string
  mobilePhone: string
}

/**
 * 接口 [send sms↗](http://192.168.2.9:3000/project/17/interface/api/10431) 的 **返回类型**
 *
 * @分类 [common tool↗](http://192.168.2.9:3000/project/17/interface/api/cat_1693)
 * @请求头 `POST /driver/common/sendMsg`
 * @更新时间 `2024-06-21 09:10:08`
 */
export interface DriverCommonSendMsgResponse {}

/**
 * 接口 [send email↗](http://192.168.2.9:3000/project/17/interface/api/11415) 的 **请求类型**
 *
 * @分类 [common tool↗](http://192.168.2.9:3000/project/17/interface/api/cat_1693)
 * @请求头 `POST /driver/common/sendEmail`
 * @更新时间 `2024-06-21 09:10:08`
 */
export interface DriverCommonSendEmailRequest {
  email: string
}

/**
 * 接口 [send email↗](http://192.168.2.9:3000/project/17/interface/api/11415) 的 **返回类型**
 *
 * @分类 [common tool↗](http://192.168.2.9:3000/project/17/interface/api/cat_1693)
 * @请求头 `POST /driver/common/sendEmail`
 * @更新时间 `2024-06-21 09:10:08`
 */
export interface DriverCommonSendEmailResponse {}

/**
 * 接口 [Paging notification↗](http://192.168.2.9:3000/project/17/interface/api/10611) 的 **请求类型**
 *
 * @分类 [notification↗](http://192.168.2.9:3000/project/17/interface/api/cat_1756)
 * @请求头 `POST /driver/notification/queryPage`
 * @更新时间 `2024-11-22 23:28:13`
 */
export interface DriverNotificationQueryPageRequest {
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [Paging notification↗](http://192.168.2.9:3000/project/17/interface/api/10611) 的 **返回类型**
 *
 * @分类 [notification↗](http://192.168.2.9:3000/project/17/interface/api/cat_1756)
 * @请求头 `POST /driver/notification/queryPage`
 * @更新时间 `2024-11-22 23:28:13`
 */
export interface DriverNotificationQueryPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    uid?: string
    jobUid?: string
    title?: string
    avatarUrl?: string
    /**
     * NotificationTypeEnums
     */
    type?: string
    content?: string
    businessUid?: string
    /**
     * 1:yes 0:no
     */
    isRead?: string
    createTime?: string
    displayTime?: string
  }[]
}

/**
 * 接口 [handle member edit job info↗](http://192.168.2.9:3000/project/17/interface/api/10617) 的 **请求类型**
 *
 * @分类 [notification↗](http://192.168.2.9:3000/project/17/interface/api/cat_1756)
 * @请求头 `POST /driver/notification/updateJob/handle`
 * @更新时间 `2024-11-22 23:28:14`
 */
export interface DriverNotificationUpdateJobHandleRequest {
  /**
   * update record uid
   */
  businessUid: string
  /**
   * 1:agree 0:reject
   */
  status: string
}

/**
 * 接口 [handle member edit job info↗](http://192.168.2.9:3000/project/17/interface/api/10617) 的 **返回类型**
 *
 * @分类 [notification↗](http://192.168.2.9:3000/project/17/interface/api/cat_1756)
 * @请求头 `POST /driver/notification/updateJob/handle`
 * @更新时间 `2024-11-22 23:28:14`
 */
export interface DriverNotificationUpdateJobHandleResponse {}

/**
 * 接口 [get update pickup window info↗](http://192.168.2.9:3000/project/17/interface/api/10623) 的 **请求类型**
 *
 * @分类 [notification↗](http://192.168.2.9:3000/project/17/interface/api/cat_1756)
 * @请求头 `GET /driver/notification/getUpdatePickupWindowInfo`
 * @更新时间 `2024-11-22 23:28:15`
 */
export interface DriverNotificationGetUpdatePickupWindowInfoRequest {
  businessUid?: string
}

/**
 * 接口 [get update pickup window info↗](http://192.168.2.9:3000/project/17/interface/api/10623) 的 **返回类型**
 *
 * @分类 [notification↗](http://192.168.2.9:3000/project/17/interface/api/cat_1756)
 * @请求头 `GET /driver/notification/getUpdatePickupWindowInfo`
 * @更新时间 `2024-11-22 23:28:15`
 */
export interface DriverNotificationGetUpdatePickupWindowInfoResponse {
  uid?: string
  pickupStartTime?: string
  pickupEndTime?: string
  /**
   * WAIT_HANDLE,AGREE,REJECT
   */
  status?: string
}

/**
 * 接口 [get count of unread notification↗](http://192.168.2.9:3000/project/17/interface/api/10957) 的 **请求类型**
 *
 * @分类 [notification↗](http://192.168.2.9:3000/project/17/interface/api/cat_1756)
 * @请求头 `GET /driver/notification/getUnReadCount`
 * @更新时间 `2024-11-22 23:28:15`
 */
export interface DriverNotificationGetUnReadCountRequest {}

/**
 * 接口 [get count of unread notification↗](http://192.168.2.9:3000/project/17/interface/api/10957) 的 **返回类型**
 *
 * @分类 [notification↗](http://192.168.2.9:3000/project/17/interface/api/cat_1756)
 * @请求头 `GET /driver/notification/getUnReadCount`
 * @更新时间 `2024-11-22 23:28:15`
 */
export interface DriverNotificationGetUnReadCountResponse {
  unReadCount?: number
}

/**
 * 接口 [read notification↗](http://192.168.2.9:3000/project/17/interface/api/10959) 的 **请求类型**
 *
 * @分类 [notification↗](http://192.168.2.9:3000/project/17/interface/api/cat_1756)
 * @请求头 `POST /driver/notification/read`
 * @更新时间 `2024-11-22 23:28:15`
 */
export interface DriverNotificationReadRequest {
  uid?: string
}

/**
 * 接口 [read notification↗](http://192.168.2.9:3000/project/17/interface/api/10959) 的 **返回类型**
 *
 * @分类 [notification↗](http://192.168.2.9:3000/project/17/interface/api/cat_1756)
 * @请求头 `POST /driver/notification/read`
 * @更新时间 `2024-11-22 23:28:15`
 */
export interface DriverNotificationReadResponse {}

/**
 * 接口 [register↗](http://192.168.2.9:3000/project/17/interface/api/5001) 的 **请求类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `POST /driver/driver/register`
 * @更新时间 `2024-06-17 15:01:48`
 */
export interface DriverDriverRegisterRequest {
  fullName: string
  email: string
  cellPhone: string
  password: string
  referralCode?: string
}

/**
 * 接口 [register↗](http://192.168.2.9:3000/project/17/interface/api/5001) 的 **返回类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `POST /driver/driver/register`
 * @更新时间 `2024-06-17 15:01:48`
 */
export interface DriverDriverRegisterResponse {}

/**
 * 接口 [login↗](http://192.168.2.9:3000/project/17/interface/api/5008) 的 **请求类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `POST /driver/driver/login`
 * @更新时间 `2024-06-17 15:01:48`
 */
export interface DriverDriverLoginRequest {
  email: string
  password: string
}

/**
 * 接口 [login↗](http://192.168.2.9:3000/project/17/interface/api/5008) 的 **返回类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `POST /driver/driver/login`
 * @更新时间 `2024-06-17 15:01:48`
 */
export interface DriverDriverLoginResponse {
  driverId?: string
  fullName?: string
  token?: string
  expire?: string
}

/**
 * 接口 [logout↗](http://192.168.2.9:3000/project/17/interface/api/5015) 的 **请求类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `POST /driver/driver/logout`
 * @更新时间 `2024-06-17 15:01:49`
 */
export interface DriverDriverLogoutRequest {}

/**
 * 接口 [logout↗](http://192.168.2.9:3000/project/17/interface/api/5015) 的 **返回类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `POST /driver/driver/logout`
 * @更新时间 `2024-06-17 15:01:49`
 */
export interface DriverDriverLogoutResponse {}

/**
 * 接口 [Obtain information about the current login user↗](http://192.168.2.9:3000/project/17/interface/api/5022) 的 **请求类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `GET /driver/driver/getCurrentDriverInfo`
 * @更新时间 `2024-06-17 15:01:49`
 */
export interface DriverDriverGetCurrentDriverInfoRequest {}

/**
 * 接口 [Obtain information about the current login user↗](http://192.168.2.9:3000/project/17/interface/api/5022) 的 **返回类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `GET /driver/driver/getCurrentDriverInfo`
 * @更新时间 `2024-06-17 15:01:49`
 */
export interface DriverDriverGetCurrentDriverInfoResponse {
  driverId?: string
  fullName?: string
  profileImg?: string
  email?: string
  cellPhone?: string
  dateOfBirth?: string
  houseNo?: string
  address?: string
  state?: string
  city?: string
  addressDetail?: string
  postCode?: string
  /**
   * My reference code
   */
  referralCode?: string
  earningsCurrentYear?: number
  earningsCurrentMonth?: number
  longitude?: string
  latitude?: string
  /**
   * 1:yes 0:no
   */
  isBindStripe?: string
}

/**
 * 接口 [Update the basic information about the current login user↗](http://192.168.2.9:3000/project/17/interface/api/5029) 的 **请求类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `POST /driver/driver/updateDriverInfo`
 * @更新时间 `2024-06-17 15:01:49`
 */
export interface DriverDriverUpdateDriverInfoRequest {
  fullName?: string
  profileImg?: string
  dateOfBirth?: string
  houseNo?: string
  address?: string
  longitude?: string
  latitude?: string
  state?: string
  city?: string
  addressDetail?: string
  postCode?: string
}

/**
 * 接口 [Update the basic information about the current login user↗](http://192.168.2.9:3000/project/17/interface/api/5029) 的 **返回类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `POST /driver/driver/updateDriverInfo`
 * @更新时间 `2024-06-17 15:01:49`
 */
export interface DriverDriverUpdateDriverInfoResponse {}

/**
 * 接口 [Change the password using the email address↗](http://192.168.2.9:3000/project/17/interface/api/5036) 的 **请求类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `POST /driver/driver/updatePwd`
 * @更新时间 `2024-06-17 15:01:50`
 */
export interface DriverDriverUpdatePwdRequest {
  email: string
  password: string
  VerificationCode: string
}

/**
 * 接口 [Change the password using the email address↗](http://192.168.2.9:3000/project/17/interface/api/5036) 的 **返回类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `POST /driver/driver/updatePwd`
 * @更新时间 `2024-06-17 15:01:50`
 */
export interface DriverDriverUpdatePwdResponse {}

/**
 * 接口 [save vehicle for driver↗](http://192.168.2.9:3000/project/17/interface/api/5463) 的 **请求类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `POST /driver/driver/vehicle/save`
 * @更新时间 `2024-06-17 15:01:51`
 */
export interface DriverDriverVehicleSaveRequest {
  vehiclePhotoList: string[]
  vehicleMake: string
  vehicleModel: string
  vehicleLicensePlate: string
  vehicleColor: string
  vehicleType: string
  driversLicenseFront: string
  driversLicenseBack: string
  driversLicenseNo: string
}

/**
 * 接口 [save vehicle for driver↗](http://192.168.2.9:3000/project/17/interface/api/5463) 的 **返回类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `POST /driver/driver/vehicle/save`
 * @更新时间 `2024-06-17 15:01:51`
 */
export interface DriverDriverVehicleSaveResponse {}

/**
 * 接口 [get vehicle info for driver↗](http://192.168.2.9:3000/project/17/interface/api/5470) 的 **请求类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `GET /driver/driver/vehicle/getInfo`
 * @更新时间 `2024-06-17 15:01:51`
 */
export interface DriverDriverVehicleGetInfoRequest {}

/**
 * 接口 [get vehicle info for driver↗](http://192.168.2.9:3000/project/17/interface/api/5470) 的 **返回类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `GET /driver/driver/vehicle/getInfo`
 * @更新时间 `2024-06-17 15:01:51`
 */
export interface DriverDriverVehicleGetInfoResponse {
  uid?: string
  driverId?: string
  vehiclePhotoList?: string[]
  vehicleMake?: string
  vehicleModel?: string
  vehicleLicensePlate?: string
  vehicleColor?: string
  vehicleType?: string
  driversLicenseFront?: string
  driversLicenseBack?: string
  driversLicenseNo?: string
}

/**
 * 接口 [Get notification setting↗](http://192.168.2.9:3000/project/17/interface/api/5498) 的 **请求类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `GET /driver/driver/getNotificationSetting`
 * @更新时间 `2024-06-17 15:01:51`
 */
export interface DriverDriverGetNotificationSettingRequest {}

/**
 * 接口 [Get notification setting↗](http://192.168.2.9:3000/project/17/interface/api/5498) 的 **返回类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `GET /driver/driver/getNotificationSetting`
 * @更新时间 `2024-06-17 15:01:51`
 */
export interface DriverDriverGetNotificationSettingResponse {
  /**
   * 1:yes 0:no
   */
  appJobMatches?: string
  /**
   * 1:yes 0:no
   */
  appNewReviews?: string
  /**
   * 1:yes 0:no
   */
  emailJobMatches?: string
  /**
   * 1:yes 0:no
   */
  emailNewReviews?: string
  /**
   * 1:yes 0:no
   */
  emailWinningBid?: string
  /**
   * 1:yes 0:no
   */
  emailOutbid?: string
  /**
   * 1:yes 0:no
   */
  changesMadeToJob?: string
  /**
   * 1:yes 0:no
   */
  readyForPickup?: string
  /**
   * 1:yes 0:no
   */
  metricImperial?: string
}

/**
 * 接口 [Modify notification setting↗](http://192.168.2.9:3000/project/17/interface/api/5505) 的 **请求类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `POST /driver/driver/updateNotificationSetting`
 * @更新时间 `2024-06-17 15:01:52`
 */
export interface DriverDriverUpdateNotificationSettingRequest {
  /**
   * 1:yes 0:no
   */
  appJobMatches?: string
  /**
   * 1:yes 0:no
   */
  appNewReviews?: string
  /**
   * 1:yes 0:no
   */
  emailJobMatches?: string
  /**
   * 1:yes 0:no
   */
  emailNewReviews?: string
  /**
   * 1:yes 0:no
   */
  emailWinningBid?: string
  /**
   * 1:yes 0:no
   */
  emailOutbid?: string
  /**
   * 1:yes 0:no
   */
  changesMadeToJob?: string
  /**
   * 1:yes 0:no
   */
  readyForPickup?: string
  /**
   * 1:yes 0:no
   */
  metricImperial?: string
}

/**
 * 接口 [Modify notification setting↗](http://192.168.2.9:3000/project/17/interface/api/5505) 的 **返回类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `POST /driver/driver/updateNotificationSetting`
 * @更新时间 `2024-06-17 15:01:52`
 */
export interface DriverDriverUpdateNotificationSettingResponse {}

/**
 * 接口 [Change the password online↗](http://192.168.2.9:3000/project/17/interface/api/9993) 的 **请求类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `POST /driver/driver/updatePwdOnline`
 * @更新时间 `2024-06-17 15:01:50`
 */
export interface DriverDriverUpdatePwdOnlineRequest {
  oldPassword: string
  newPassword: string
}

/**
 * 接口 [Change the password online↗](http://192.168.2.9:3000/project/17/interface/api/9993) 的 **返回类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `POST /driver/driver/updatePwdOnline`
 * @更新时间 `2024-06-17 15:01:50`
 */
export interface DriverDriverUpdatePwdOnlineResponse {}

/**
 * 接口 [send verify code↗](http://192.168.2.9:3000/project/17/interface/api/9999) 的 **请求类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `POST /driver/driver/sendVerifyCode`
 * @更新时间 `2024-06-17 15:01:52`
 */
export interface DriverDriverSendVerifyCodeRequest {
  /**
   * email
   */
  email: string
}

/**
 * 接口 [send verify code↗](http://192.168.2.9:3000/project/17/interface/api/9999) 的 **返回类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `POST /driver/driver/sendVerifyCode`
 * @更新时间 `2024-06-17 15:01:52`
 */
export interface DriverDriverSendVerifyCodeResponse {}

/**
 * 接口 [update FCM token↗](http://192.168.2.9:3000/project/17/interface/api/10551) 的 **请求类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `POST /driver/driver/updateFCMToken`
 * @更新时间 `2024-06-17 15:01:52`
 */
export interface DriverDriverUpdateFcmTokenRequest {
  fcmToken: string
}

/**
 * 接口 [update FCM token↗](http://192.168.2.9:3000/project/17/interface/api/10551) 的 **返回类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `POST /driver/driver/updateFCMToken`
 * @更新时间 `2024-06-17 15:01:52`
 */
export interface DriverDriverUpdateFcmTokenResponse {}

/**
 * 接口 [Paging review list for driver↗](http://192.168.2.9:3000/project/17/interface/api/10593) 的 **请求类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `POST /driver/driver/review/queryPage`
 * @更新时间 `2024-06-17 15:01:53`
 */
export interface DriverDriverReviewQueryPageRequest {
  /**
   * 1:yes 0:no
   */
  isShowLowStars?: string
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [Paging review list for driver↗](http://192.168.2.9:3000/project/17/interface/api/10593) 的 **返回类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `POST /driver/driver/review/queryPage`
 * @更新时间 `2024-06-17 15:01:53`
 */
export interface DriverDriverReviewQueryPageResponse {}

/**
 * 接口 [bind stripe account↗](http://192.168.2.9:3000/project/17/interface/api/11377) 的 **请求类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `POST /driver/driver/bindStripe`
 * @更新时间 `2024-06-17 15:01:53`
 */
export interface DriverDriverBindStripeRequest {}

/**
 * 接口 [bind stripe account↗](http://192.168.2.9:3000/project/17/interface/api/11377) 的 **返回类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/17/interface/api/cat_729)
 * @请求头 `POST /driver/driver/bindStripe`
 * @更新时间 `2024-06-17 15:01:53`
 */
export interface DriverDriverBindStripeResponse {
  url?: string
}

/**
 * 接口 [Send chat message↗](http://192.168.2.9:3000/project/17/interface/api/5183) 的 **请求类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/17/interface/api/cat_754)
 * @请求头 `POST /driver/chat/sendMessage`
 * @更新时间 `2024-05-13 14:45:13`
 */
export interface DriverChatSendMessageRequest {
  chatUid?: string
  memberId?: string
  content: string
  contentType?: string
}

/**
 * 接口 [Send chat message↗](http://192.168.2.9:3000/project/17/interface/api/5183) 的 **返回类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/17/interface/api/cat_754)
 * @请求头 `POST /driver/chat/sendMessage`
 * @更新时间 `2024-05-13 14:45:13`
 */
export interface DriverChatSendMessageResponse {}

/**
 * 接口 [Paging talk list↗](http://192.168.2.9:3000/project/17/interface/api/5190) 的 **请求类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/17/interface/api/cat_754)
 * @请求头 `POST /driver/chat/queryPage`
 * @更新时间 `2024-05-13 14:45:14`
 */
export interface DriverChatQueryPageRequest {
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [Paging talk list↗](http://192.168.2.9:3000/project/17/interface/api/5190) 的 **返回类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/17/interface/api/cat_754)
 * @请求头 `POST /driver/chat/queryPage`
 * @更新时间 `2024-05-13 14:45:14`
 */
export interface DriverChatQueryPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    uid?: string
    memberId?: string
    memberName?: string
    memberProfileImg?: string
    memberPhone?: string
    jobUid?: string
    jobTitle?: string
    driverId?: string
    unReadCount?: number
    content?: string
    sendTime?: string
    sendTimeCN?: string
  }[]
}

/**
 * 接口 [Paging message list↗](http://192.168.2.9:3000/project/17/interface/api/5197) 的 **请求类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/17/interface/api/cat_754)
 * @请求头 `POST /driver/chat/queryMessagePage`
 * @更新时间 `2024-05-13 14:45:14`
 */
export interface DriverChatQueryMessagePageRequest {
  /**
   * @NotBlank(message = "chatUid Cannot Be Empty")
   */
  chatUid?: string
  memberId?: string
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [Paging message list↗](http://192.168.2.9:3000/project/17/interface/api/5197) 的 **返回类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/17/interface/api/cat_754)
 * @请求头 `POST /driver/chat/queryMessagePage`
 * @更新时间 `2024-05-13 14:45:14`
 */
export interface DriverChatQueryMessagePageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    uid?: string
    chatUid?: string
    jobUid?: string
    type?: string
    senderId?: string
    senderName?: string
    senderProfileImg?: string
    receiverId?: string
    receiverName?: string
    receiverProfileImg?: string
    content?: string
    contentType?: string
    createTime?: string
    isOwn?: string
    /**
     * 1:yes 0:no
     */
    isRead?: string
  }[]
}

/**
 * 接口 [send FCM↗](http://192.168.2.9:3000/project/17/interface/api/10197) 的 **请求类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/17/interface/api/cat_754)
 * @请求头 `GET /driver/chat/sendFCM`
 * @更新时间 `2024-05-13 14:45:15`
 */
export interface DriverChatSendFcmRequest {
  token?: string
  content?: string
}

/**
 * 接口 [send FCM↗](http://192.168.2.9:3000/project/17/interface/api/10197) 的 **返回类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/17/interface/api/cat_754)
 * @请求头 `GET /driver/chat/sendFCM`
 * @更新时间 `2024-05-13 14:45:15`
 */
export interface DriverChatSendFcmResponse {}

/**
 * 接口 [delete chat↗](http://192.168.2.9:3000/project/17/interface/api/10749) 的 **请求类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/17/interface/api/cat_754)
 * @请求头 `POST /driver/chat/delete`
 * @更新时间 `2024-05-13 14:45:14`
 */
export interface DriverChatDeleteRequest {
  uid: string
}

/**
 * 接口 [delete chat↗](http://192.168.2.9:3000/project/17/interface/api/10749) 的 **返回类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/17/interface/api/cat_754)
 * @请求头 `POST /driver/chat/delete`
 * @更新时间 `2024-05-13 14:45:14`
 */
export interface DriverChatDeleteResponse {}

/**
 * 接口 [send FCM↗](http://192.168.2.9:3000/project/17/interface/api/10755) 的 **请求类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/17/interface/api/cat_754)
 * @请求头 `GET /driver/chat/sendDataFCM`
 * @更新时间 `2024-05-13 14:45:15`
 */
export interface DriverChatSendDataFcmRequest {
  token?: string
}

/**
 * 接口 [send FCM↗](http://192.168.2.9:3000/project/17/interface/api/10755) 的 **返回类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/17/interface/api/cat_754)
 * @请求头 `GET /driver/chat/sendDataFCM`
 * @更新时间 `2024-05-13 14:45:15`
 */
export interface DriverChatSendDataFcmResponse {}

/**
 * 接口 [read message↗](http://192.168.2.9:3000/project/17/interface/api/10977) 的 **请求类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/17/interface/api/cat_754)
 * @请求头 `POST /driver/chat/readMessage`
 * @更新时间 `2024-05-13 14:45:15`
 */
export interface DriverChatReadMessageRequest {
  messageUidList?: string[]
}

/**
 * 接口 [read message↗](http://192.168.2.9:3000/project/17/interface/api/10977) 的 **返回类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/17/interface/api/cat_754)
 * @请求头 `POST /driver/chat/readMessage`
 * @更新时间 `2024-05-13 14:45:15`
 */
export interface DriverChatReadMessageResponse {}

/**
 * 接口 [init chat↗](http://192.168.2.9:3000/project/17/interface/api/11003) 的 **请求类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/17/interface/api/cat_754)
 * @请求头 `POST /driver/chat/initChat`
 * @更新时间 `2024-05-13 14:45:16`
 */
export interface DriverChatInitChatRequest {
  memberId: string
  jobUid: string
}

/**
 * 接口 [init chat↗](http://192.168.2.9:3000/project/17/interface/api/11003) 的 **返回类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/17/interface/api/cat_754)
 * @请求头 `POST /driver/chat/initChat`
 * @更新时间 `2024-05-13 14:45:16`
 */
export interface DriverChatInitChatResponse {
  chatUid?: string
}

/**
 * 接口 [send invite email↗](http://192.168.2.9:3000/project/17/interface/api/5456) 的 **请求类型**
 *
 * @分类 [invite friend↗](http://192.168.2.9:3000/project/17/interface/api/cat_839)
 * @请求头 `POST /driver/inviteFriend/sendEmail`
 * @更新时间 `2023-11-16 15:46:19`
 */
export interface DriverInviteFriendSendEmailRequest {
  email: string
  content?: string
}

/**
 * 接口 [send invite email↗](http://192.168.2.9:3000/project/17/interface/api/5456) 的 **返回类型**
 *
 * @分类 [invite friend↗](http://192.168.2.9:3000/project/17/interface/api/cat_839)
 * @请求头 `POST /driver/inviteFriend/sendEmail`
 * @更新时间 `2023-11-16 15:46:19`
 */
export interface DriverInviteFriendSendEmailResponse {}

/**
 * 接口 [all↗](http://192.168.2.9:3000/project/17/interface/api/5785) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/queryAllPage`
 * @更新时间 `2024-11-23 22:12:02`
 */
export interface DriverJobQueryAllPageRequest {
  pickupLongitude?: string
  pickupLatitude?: string
  dropOffLongitude?: string
  dropOffLatitude?: string
  isClosest?: string
  statusList?: string[]
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [all↗](http://192.168.2.9:3000/project/17/interface/api/5785) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/queryAllPage`
 * @更新时间 `2024-11-23 22:12:02`
 */
export interface DriverJobQueryAllPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    uid?: string
    jobUid?: string
    descriptiveTitle?: string
    pickupLocation?: string
    pickupCity?: string
    pickupArea?: string
    pickupAddress?: string
    pickupAddressName?: string
    pickupLongitude?: string
    pickupLatitude?: string
    dropOffLocation?: string
    dropOffCity?: string
    dropOffArea?: string
    dropOffAddress?: string
    dropOffAddressName?: string
    dropOffLongitude?: string
    dropOffLatitude?: string
    estimatedPrice?: number
    driverBigAmount?: number
    driverReceiveAmount?: number
    deductionServiceAmount?: number
    photoOfItems?: string
    photoOfItemList?: string[]
    /**
     * 1:yes,0:no
     */
    isExpressListing?: string
    pickDis?: string
    dropOffDis?: string
    /**
     * NEW,BID,ACCEPT_BID,READY_PICKUP,IN_TRANSIT,DELIVERED,CANCEL,COMPLETE
     */
    status?: string
    /**
     * 1=activate 0=deactivate
     */
    activate?: string
    driverId?: string
    tipOrBonus?: number
    coordinateList?: {
      longitude?: string
      latitude?: string
    }[]
    displayAmount?: number
  }[]
}

/**
 * 接口 [job search↗](http://192.168.2.9:3000/project/17/interface/api/5792) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/querySearchPage`
 * @更新时间 `2024-11-23 22:12:04`
 */
export interface DriverJobQuerySearchPageRequest {
  /**
   * 1:yes,0:no
   */
  isRegularDeliveries?: string
  /**
   * 1:yes,0:no
   */
  isExpressDeliveries?: string
  entireSize?: string
  entireSizeList?: string[]
  /**
   * DEPARTURE_LOCATION,DESTINATION
   */
  routeBase?: string
  distance?: number
  pickupLongitude?: string
  pickupLatitude?: string
  dropOffLongitude?: string
  dropOffLatitude?: string
  statusList?: string[]
  expressList?: string[]
  isClosest?: string
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [job search↗](http://192.168.2.9:3000/project/17/interface/api/5792) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/querySearchPage`
 * @更新时间 `2024-11-23 22:12:04`
 */
export interface DriverJobQuerySearchPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    uid?: string
    jobUid?: string
    descriptiveTitle?: string
    pickupLocation?: string
    pickupCity?: string
    pickupArea?: string
    pickupAddress?: string
    pickupAddressName?: string
    pickupLongitude?: string
    pickupLatitude?: string
    dropOffLocation?: string
    dropOffCity?: string
    dropOffArea?: string
    dropOffAddress?: string
    dropOffAddressName?: string
    dropOffLongitude?: string
    dropOffLatitude?: string
    estimatedPrice?: number
    driverBigAmount?: number
    driverReceiveAmount?: number
    deductionServiceAmount?: number
    photoOfItems?: string
    photoOfItemList?: string[]
    /**
     * 1:yes,0:no
     */
    isExpressListing?: string
    pickDis?: string
    dropOffDis?: string
    /**
     * NEW,BID,ACCEPT_BID,READY_PICKUP,IN_TRANSIT,DELIVERED,CANCEL,COMPLETE
     */
    status?: string
    /**
     * 1=activate 0=deactivate
     */
    activate?: string
    driverId?: string
    tipOrBonus?: number
    coordinateList?: {
      longitude?: string
      latitude?: string
    }[]
    displayAmount?: number
  }[]
}

/**
 * 接口 [detail↗](http://192.168.2.9:3000/project/17/interface/api/5799) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `GET /driver/job/detail`
 * @更新时间 `2024-11-23 22:12:06`
 */
export interface DriverJobDetailRequest {
  uid?: string
  longitude?: string
  latitude?: string
}

/**
 * 接口 [detail↗](http://192.168.2.9:3000/project/17/interface/api/5799) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `GET /driver/job/detail`
 * @更新时间 `2024-11-23 22:12:06`
 */
export interface DriverJobDetailResponse {
  uid?: string
  descriptiveTitle?: string
  itemDescription?: string
  pickupLocation?: string
  pickupCity?: string
  pickupArea?: string
  pickupAddress?: string
  pickupAddressName?: string
  pickupLongitude?: string
  pickupLatitude?: string
  dropOffLocation?: string
  dropOffCity?: string
  dropOffArea?: string
  dropOffAddress?: string
  dropOffAddressName?: string
  dropOffLongitude?: string
  dropOffLatitude?: string
  estimatedPrice?: number
  bestPrice?: number
  driverReceiveAmount?: number
  deductionServiceAmount?: number
  entireSize?: string
  entireSizeDesc?: string
  quantityOfItems?: number
  orderRefNumber?: string
  photoOfItemList?: string[]
  /**
   * 1:yes,0:no
   */
  isExpressListing?: string
  driverQualification?: number
  drivingTime?: number
  pickupDistanceFromMe?: number
  routeDistance?: number
  deliveryDeadline?: string
  pickupStartTime?: string
  pickupEndTime?: string
  viewsCount?: number
  /**
   * status
   * Normal job：
   * ACCEPT_BID = Confirmed
   * READY_PICKUP = packed
   * IN_TRANSIT = In Transit
   * DELIVERED = Delivered
   *
   * Express job:
   * PAID = Posted & Packed
   * READY_PICKUP = Driver Confirmed
   * IN_TRANSIT = In Transit
   * DELIVERED = Delivered
   */
  status?: string
  memberId?: string
  memberCellPhone?: string
  memberName?: string
  memberProfileImg?: string
  shareUrl?: string
  /**
   * 1=yes 0=no
   */
  isCollect?: string
  expectedDeliveryTime?: string
  pendingTime?: string
  pickTime?: string
  InTransitTime?: string
  deliveredTime?: string
  createTime?: string
  /**
   * 1=activate 0=deactivate
   */
  activate?: string
  paidTime?: string
  driverConfirmTime?: string
  displayAmount?: number
  amountTitle?: string
  tipOrBonus?: number
}

/**
 * 接口 [saved & matched↗](http://192.168.2.9:3000/project/17/interface/api/5806) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/collect/queryPage`
 * @更新时间 `2024-11-23 22:12:06`
 */
export interface DriverJobCollectQueryPageRequest {
  keywords?: string
  pickupLongitude?: string
  pickupLatitude?: string
  dropOffLongitude?: string
  dropOffLatitude?: string
  /**
   * 1：yes 0:no
   */
  isClosest?: string
  collectDate?: string
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [saved & matched↗](http://192.168.2.9:3000/project/17/interface/api/5806) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/collect/queryPage`
 * @更新时间 `2024-11-23 22:12:06`
 */
export interface DriverJobCollectQueryPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    uid?: string
    jobUid?: string
    descriptiveTitle?: string
    pickupLocation?: string
    pickupCity?: string
    pickupArea?: string
    pickupAddress?: string
    pickupAddressName?: string
    pickupLongitude?: string
    pickupLatitude?: string
    dropOffLocation?: string
    dropOffCity?: string
    dropOffArea?: string
    dropOffAddress?: string
    dropOffAddressName?: string
    dropOffLongitude?: string
    dropOffLatitude?: string
    estimatedPrice?: number
    driverBigAmount?: number
    driverReceiveAmount?: number
    deductionServiceAmount?: number
    photoOfItems?: string
    photoOfItemList?: string[]
    /**
     * 1:yes,0:no
     */
    isExpressListing?: string
    pickDis?: string
    dropOffDis?: string
    /**
     * NEW,BID,ACCEPT_BID,READY_PICKUP,IN_TRANSIT,DELIVERED,CANCEL,COMPLETE
     */
    status?: string
    /**
     * 1=activate 0=deactivate
     */
    activate?: string
    driverId?: string
    tipOrBonus?: number
    coordinateList?: {
      longitude?: string
      latitude?: string
    }[]
    displayAmount?: number
  }[]
}

/**
 * 接口 [my deliveries : my jobs\/completed↗](http://192.168.2.9:3000/project/17/interface/api/5827) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/delivery/queryPage`
 * @更新时间 `2024-11-23 22:12:05`
 */
export interface DriverJobDeliveryQueryPageRequest {
  keywords?: string
  /**
   * 1:yes 0:no
   */
  isCompleted?: string
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [my deliveries : my jobs\/completed↗](http://192.168.2.9:3000/project/17/interface/api/5827) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/delivery/queryPage`
 * @更新时间 `2024-11-23 22:12:05`
 */
export interface DriverJobDeliveryQueryPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    uid?: string
    jobUid?: string
    descriptiveTitle?: string
    pickupLocation?: string
    pickupCity?: string
    pickupArea?: string
    pickupAddress?: string
    pickupAddressName?: string
    pickupLongitude?: string
    pickupLatitude?: string
    dropOffLocation?: string
    dropOffCity?: string
    dropOffArea?: string
    dropOffAddress?: string
    dropOffAddressName?: string
    dropOffLongitude?: string
    dropOffLatitude?: string
    estimatedPrice?: number
    driverBigAmount?: number
    driverReceiveAmount?: number
    deductionServiceAmount?: number
    photoOfItems?: string
    photoOfItemList?: string[]
    /**
     * 1:yes,0:no
     */
    isExpressListing?: string
    pickDis?: string
    dropOffDis?: string
    /**
     * NEW,BID,ACCEPT_BID,READY_PICKUP,IN_TRANSIT,DELIVERED,CANCEL,COMPLETE
     */
    status?: string
    /**
     * 1=activate 0=deactivate
     */
    activate?: string
    driverId?: string
    tipOrBonus?: number
    coordinateList?: {
      longitude?: string
      latitude?: string
    }[]
    displayAmount?: number
  }[]
}

/**
 * 接口 [submit bid↗](http://192.168.2.9:3000/project/17/interface/api/5834) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/bid/submit`
 * @更新时间 `2024-11-23 22:12:07`
 */
export interface DriverJobBidSubmitRequest {
  jobUid: string
  amount: number
  deliveryDate: string
  deliveryTime?: string
  extraNotes?: string
}

/**
 * 接口 [submit bid↗](http://192.168.2.9:3000/project/17/interface/api/5834) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/bid/submit`
 * @更新时间 `2024-11-23 22:12:07`
 */
export interface DriverJobBidSubmitResponse {}

/**
 * 接口 [update bid↗](http://192.168.2.9:3000/project/17/interface/api/5841) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/bid/update`
 * @更新时间 `2024-11-23 22:12:09`
 */
export interface DriverJobBidUpdateRequest {
  uid: string
  amount: number
  deliveryDate: string
  deliveryTime?: string
  extraNotes?: string
}

/**
 * 接口 [update bid↗](http://192.168.2.9:3000/project/17/interface/api/5841) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/bid/update`
 * @更新时间 `2024-11-23 22:12:09`
 */
export interface DriverJobBidUpdateResponse {}

/**
 * 接口 [Paging bid list↗](http://192.168.2.9:3000/project/17/interface/api/5848) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/bid/queryPage`
 * @更新时间 `2024-11-23 22:12:10`
 */
export interface DriverJobBidQueryPageRequest {
  jobUid: string
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [Paging bid list↗](http://192.168.2.9:3000/project/17/interface/api/5848) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/bid/queryPage`
 * @更新时间 `2024-11-23 22:12:10`
 */
export interface DriverJobBidQueryPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    uid?: string
    jobUid?: string
    driverId?: string
    driverName?: string
    driverProfileImg?: string
    driverBidAmount?: number
    deliveryDate?: string
    deliveryTime?: string
    extraNotes?: string
    /**
     * 1:yes 0:no
     */
    isOwn?: string
    /**
     * 1:yes 0:no
     */
    isAccept?: string
    tipOrBonus?: number
  }[]
}

/**
 * 接口 [complete pickup↗](http://192.168.2.9:3000/project/17/interface/api/5883) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/completePickup`
 * @更新时间 `2024-11-23 22:12:11`
 */
export interface DriverJobCompletePickupRequest {
  uid: string
  productImageList: string[]
}

/**
 * 接口 [complete pickup↗](http://192.168.2.9:3000/project/17/interface/api/5883) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/completePickup`
 * @更新时间 `2024-11-23 22:12:11`
 */
export interface DriverJobCompletePickupResponse {}

/**
 * 接口 [complete delivery↗](http://192.168.2.9:3000/project/17/interface/api/5890) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/completeDelivery`
 * @更新时间 `2024-11-23 22:12:11`
 */
export interface DriverJobCompleteDeliveryRequest {
  uid: string
}

/**
 * 接口 [complete delivery↗](http://192.168.2.9:3000/project/17/interface/api/5890) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/completeDelivery`
 * @更新时间 `2024-11-23 22:12:11`
 */
export interface DriverJobCompleteDeliveryResponse {}

/**
 * 接口 [complete drop off↗](http://192.168.2.9:3000/project/17/interface/api/5897) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/completeDropOff`
 * @更新时间 `2024-11-23 22:12:12`
 */
export interface DriverJobCompleteDropOffRequest {
  uid: string
  productImageList: string[]
}

/**
 * 接口 [complete drop off↗](http://192.168.2.9:3000/project/17/interface/api/5897) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/completeDropOff`
 * @更新时间 `2024-11-23 22:12:12`
 */
export interface DriverJobCompleteDropOffResponse {}

/**
 * 接口 [cancel job↗](http://192.168.2.9:3000/project/17/interface/api/5960) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/cancel`
 * @更新时间 `2024-11-23 22:12:12`
 */
export interface DriverJobCancelRequest {
  uid: string
  cancelReason?: string
}

/**
 * 接口 [cancel job↗](http://192.168.2.9:3000/project/17/interface/api/5960) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/cancel`
 * @更新时间 `2024-11-23 22:12:12`
 */
export interface DriverJobCancelResponse {}

/**
 * 接口 [delivery detail↗](http://192.168.2.9:3000/project/17/interface/api/5967) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `GET /driver/job/deliveryDetail`
 * @更新时间 `2024-11-23 22:12:12`
 */
export interface DriverJobDeliveryDetailRequest {
  uid?: string
}

/**
 * 接口 [delivery detail↗](http://192.168.2.9:3000/project/17/interface/api/5967) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `GET /driver/job/deliveryDetail`
 * @更新时间 `2024-11-23 22:12:12`
 */
export interface DriverJobDeliveryDetailResponse {
  uid?: string
  orderRefNumber?: string
  pickupContactUserName?: string
  pickupContactPhone?: string
  pickupContactEmail?: string
  pickupStartTime?: string
  pickupEndTime?: string
  privateInformation?: string
  receiveContactUserName?: string
  receiveContactPhone?: string
  receiveContactEmail?: string
  dropOffDetails?: string
  deliveryDeadlineTime?: string
  customerProductImageList?: string[]
  driverProductImageList?: string[]
  dropOffImageList?: string[]
  score?: number
  evaluateDesc?: string
  memberId?: string
  memberName?: string
  memberAvatar?: string
  reviewTime?: string
  /**
   * 1:yes 0:no
   */
  isItemGreater?: string
  width?: number
  height?: number
  length?: number
  weight?: number
  unitOfLength?: string
  unitOfWeight?: string
  itemDescription?: string
}

/**
 * 接口 [accept job↗](http://192.168.2.9:3000/project/17/interface/api/5981) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/accept`
 * @更新时间 `2024-11-23 22:12:13`
 */
export interface DriverJobAcceptRequest {
  uid: string
}

/**
 * 接口 [accept job↗](http://192.168.2.9:3000/project/17/interface/api/5981) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/accept`
 * @更新时间 `2024-11-23 22:12:13`
 */
export interface DriverJobAcceptResponse {}

/**
 * 接口 [my deliveries: my bids↗](http://192.168.2.9:3000/project/17/interface/api/6282) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/delivery/myBids`
 * @更新时间 `2024-11-23 22:12:05`
 */
export interface DriverJobDeliveryMyBidsRequest {
  keywords?: string
  driverId?: string
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [my deliveries: my bids↗](http://192.168.2.9:3000/project/17/interface/api/6282) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/delivery/myBids`
 * @更新时间 `2024-11-23 22:12:05`
 */
export interface DriverJobDeliveryMyBidsResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    uid?: string
    jobUid?: string
    descriptiveTitle?: string
    pickupLocation?: string
    pickupCity?: string
    pickupArea?: string
    pickupAddress?: string
    pickupAddressName?: string
    pickupLongitude?: string
    pickupLatitude?: string
    dropOffLocation?: string
    dropOffCity?: string
    dropOffArea?: string
    dropOffAddress?: string
    dropOffAddressName?: string
    dropOffLongitude?: string
    dropOffLatitude?: string
    estimatedPrice?: number
    driverBigAmount?: number
    driverReceiveAmount?: number
    deductionServiceAmount?: number
    photoOfItems?: string
    photoOfItemList?: string[]
    /**
     * 1:yes,0:no
     */
    isExpressListing?: string
    pickDis?: string
    dropOffDis?: string
    /**
     * NEW,BID,ACCEPT_BID,READY_PICKUP,IN_TRANSIT,DELIVERED,CANCEL,COMPLETE
     */
    status?: string
    /**
     * 1=activate 0=deactivate
     */
    activate?: string
    driverId?: string
    tipOrBonus?: number
    coordinateList?: {
      longitude?: string
      latitude?: string
    }[]
    displayAmount?: number
  }[]
}

/**
 * 接口 [collect or cancel↗](http://192.168.2.9:3000/project/17/interface/api/10257) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/collectOrCancel`
 * @更新时间 `2024-11-23 22:12:14`
 */
export interface DriverJobCollectOrCancelRequest {
  jobUid: string
  /**
   * 1=add 0=cancel
   */
  isAdd: string
}

/**
 * 接口 [collect or cancel↗](http://192.168.2.9:3000/project/17/interface/api/10257) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/collectOrCancel`
 * @更新时间 `2024-11-23 22:12:14`
 */
export interface DriverJobCollectOrCancelResponse {}

/**
 * 接口 [deliver chart↗](http://192.168.2.9:3000/project/17/interface/api/12453) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/deliveryChart`
 * @更新时间 `2024-11-23 22:12:10`
 */
export interface DriverJobDeliveryChartRequest {
  /**
   * chatType  MONTH  YEAR;
   */
  chartType?: string
}

/**
 * 接口 [deliver chart↗](http://192.168.2.9:3000/project/17/interface/api/12453) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/deliveryChart`
 * @更新时间 `2024-11-23 22:12:10`
 */
export type DriverJobDeliveryChartResponse = {
  title?: string
  amount?: number
}[]

/**
 * 接口 [views add↗](http://192.168.2.9:3000/project/17/interface/api/12457) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/viewsAdd`
 * @更新时间 `2024-11-23 22:12:14`
 */
export interface DriverJobViewsAddRequest {
  uid: string
}

/**
 * 接口 [views add↗](http://192.168.2.9:3000/project/17/interface/api/12457) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/viewsAdd`
 * @更新时间 `2024-11-23 22:12:14`
 */
export interface DriverJobViewsAddResponse {}

/**
 * 接口 [check distance↗](http://192.168.2.9:3000/project/17/interface/api/12909) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/checkDistance`
 * @更新时间 `2024-11-23 22:12:14`
 */
export interface DriverJobCheckDistanceRequest {
  /**
   * position 1
   */
  position: {
    /**
     * latitude
     */
    latitude?: number
    /**
     * longitude
     */
    longitude?: number
  }
  jobUid: string
}

/**
 * 接口 [check distance↗](http://192.168.2.9:3000/project/17/interface/api/12909) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/17/interface/api/cat_924)
 * @请求头 `POST /driver/job/checkDistance`
 * @更新时间 `2024-11-23 22:12:14`
 */
export interface DriverJobCheckDistanceResponse {}

/**
 * 接口 [paging job order list↗](http://192.168.2.9:3000/project/17/interface/api/5988) 的 **请求类型**
 *
 * @分类 [job order↗](http://192.168.2.9:3000/project/17/interface/api/cat_954)
 * @请求头 `POST /driver/jobOrder/queryPage`
 * @更新时间 `2024-11-23 14:26:51`
 */
export interface DriverJobOrderQueryPageRequest {
  startYear?: number
  endYear?: number
  /**
   * XLS/PDF
   */
  fileType?: string
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [paging job order list↗](http://192.168.2.9:3000/project/17/interface/api/5988) 的 **返回类型**
 *
 * @分类 [job order↗](http://192.168.2.9:3000/project/17/interface/api/cat_954)
 * @请求头 `POST /driver/jobOrder/queryPage`
 * @更新时间 `2024-11-23 14:26:51`
 */
export interface DriverJobOrderQueryPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    orderId?: string
    memberId?: string
    memberName?: string
    memberProfileImage?: string
    amount?: number
    paymentMethod?: string
    payTime?: string
  }[]
}

/**
 * 接口 [export transaction history↗](http://192.168.2.9:3000/project/17/interface/api/5995) 的 **请求类型**
 *
 * @分类 [job order↗](http://192.168.2.9:3000/project/17/interface/api/cat_954)
 * @请求头 `POST /driver/jobOrder/export`
 * @更新时间 `2024-11-23 14:26:51`
 */
export interface DriverJobOrderExportRequest {
  startYear?: number
  endYear?: number
  /**
   * XLS/PDF
   */
  fileType?: string
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [export transaction history↗](http://192.168.2.9:3000/project/17/interface/api/5995) 的 **返回类型**
 *
 * @分类 [job order↗](http://192.168.2.9:3000/project/17/interface/api/cat_954)
 * @请求头 `POST /driver/jobOrder/export`
 * @更新时间 `2024-11-23 14:26:51`
 */
export interface DriverJobOrderExportResponse {}

/**
 * 接口 [credit card list↗](http://192.168.2.9:3000/project/17/interface/api/6002) 的 **请求类型**
 *
 * @分类 [card↗](http://192.168.2.9:3000/project/17/interface/api/cat_959)
 * @请求头 `GET /driver/card/credit/getList`
 * @更新时间 `2023-11-23 17:35:37`
 */
export interface DriverCardCreditGetListRequest {}

/**
 * 接口 [credit card list↗](http://192.168.2.9:3000/project/17/interface/api/6002) 的 **返回类型**
 *
 * @分类 [card↗](http://192.168.2.9:3000/project/17/interface/api/cat_959)
 * @请求头 `GET /driver/card/credit/getList`
 * @更新时间 `2023-11-23 17:35:37`
 */
export type DriverCardCreditGetListResponse = {
  uid?: string
  cardNumber?: string
  expiryMonth?: number
  expiryYear?: number
  securityCode?: string
  firstName?: string
  lastName?: string
}[]

/**
 * 接口 [add a credit card↗](http://192.168.2.9:3000/project/17/interface/api/6009) 的 **请求类型**
 *
 * @分类 [card↗](http://192.168.2.9:3000/project/17/interface/api/cat_959)
 * @请求头 `POST /driver/card/credit/add`
 * @更新时间 `2023-11-23 17:35:37`
 */
export interface DriverCardCreditAddRequest {
  cardNumber: string
  expiryMonth: number
  expiryYear: number
  securityCode: string
  firstName: string
  lastName: string
}

/**
 * 接口 [add a credit card↗](http://192.168.2.9:3000/project/17/interface/api/6009) 的 **返回类型**
 *
 * @分类 [card↗](http://192.168.2.9:3000/project/17/interface/api/cat_959)
 * @请求头 `POST /driver/card/credit/add`
 * @更新时间 `2023-11-23 17:35:37`
 */
export interface DriverCardCreditAddResponse {}

/**
 * 接口 [delete the credit card↗](http://192.168.2.9:3000/project/17/interface/api/6016) 的 **请求类型**
 *
 * @分类 [card↗](http://192.168.2.9:3000/project/17/interface/api/cat_959)
 * @请求头 `POST /driver/card/credit/delete`
 * @更新时间 `2023-11-23 17:35:37`
 */
export interface DriverCardCreditDeleteRequest {
  uid: string
}

/**
 * 接口 [delete the credit card↗](http://192.168.2.9:3000/project/17/interface/api/6016) 的 **返回类型**
 *
 * @分类 [card↗](http://192.168.2.9:3000/project/17/interface/api/cat_959)
 * @请求头 `POST /driver/card/credit/delete`
 * @更新时间 `2023-11-23 17:35:37`
 */
export interface DriverCardCreditDeleteResponse {}

/**
 * 接口 [debit card list↗](http://192.168.2.9:3000/project/17/interface/api/6023) 的 **请求类型**
 *
 * @分类 [card↗](http://192.168.2.9:3000/project/17/interface/api/cat_959)
 * @请求头 `GET /driver/card/debit/getCardList`
 * @更新时间 `2023-11-23 17:35:38`
 */
export interface DriverCardDebitGetCardListRequest {}

/**
 * 接口 [debit card list↗](http://192.168.2.9:3000/project/17/interface/api/6023) 的 **返回类型**
 *
 * @分类 [card↗](http://192.168.2.9:3000/project/17/interface/api/cat_959)
 * @请求头 `GET /driver/card/debit/getCardList`
 * @更新时间 `2023-11-23 17:35:38`
 */
export type DriverCardDebitGetCardListResponse = {
  holderName?: string
  branchName?: string
  accountNumber?: string
  ifscCode?: string
}[]

/**
 * 接口 [add a debit card↗](http://192.168.2.9:3000/project/17/interface/api/6030) 的 **请求类型**
 *
 * @分类 [card↗](http://192.168.2.9:3000/project/17/interface/api/cat_959)
 * @请求头 `POST /driver/card/debit/add`
 * @更新时间 `2023-11-23 17:35:38`
 */
export interface DriverCardDebitAddRequest {
  holderName: string
  branchName: string
  accountNumber: string
  ifscCode: string
}

/**
 * 接口 [add a debit card↗](http://192.168.2.9:3000/project/17/interface/api/6030) 的 **返回类型**
 *
 * @分类 [card↗](http://192.168.2.9:3000/project/17/interface/api/cat_959)
 * @请求头 `POST /driver/card/debit/add`
 * @更新时间 `2023-11-23 17:35:38`
 */
export interface DriverCardDebitAddResponse {}

/**
 * 接口 [delete the debit card↗](http://192.168.2.9:3000/project/17/interface/api/6037) 的 **请求类型**
 *
 * @分类 [card↗](http://192.168.2.9:3000/project/17/interface/api/cat_959)
 * @请求头 `POST /driver/card/debit/delete`
 * @更新时间 `2023-11-23 17:35:38`
 */
export interface DriverCardDebitDeleteRequest {
  uid: string
}

/**
 * 接口 [delete the debit card↗](http://192.168.2.9:3000/project/17/interface/api/6037) 的 **返回类型**
 *
 * @分类 [card↗](http://192.168.2.9:3000/project/17/interface/api/cat_959)
 * @请求头 `POST /driver/card/debit/delete`
 * @更新时间 `2023-11-23 17:35:38`
 */
export interface DriverCardDebitDeleteResponse {}

/**
 * 接口 [save search condition↗](http://192.168.2.9:3000/project/17/interface/api/6044) 的 **请求类型**
 *
 * @分类 [search condition↗](http://192.168.2.9:3000/project/17/interface/api/cat_964)
 * @请求头 `POST /driver/searchCondition/save`
 * @更新时间 `2024-11-23 14:26:56`
 */
export interface DriverSearchConditionSaveRequest {
  /**
   * 1:yes,0:no
   */
  isRegularDeliveries?: string
  /**
   * 1:yes,0:no
   */
  isExpressDeliveries?: string
  entireSize: string
  distance: number
  pickupLongitude?: string
  pickupLatitude?: string
  dropOffLongitude?: string
  dropOffLatitude?: string
  coordinateList?: {
    longitude?: string
    latitude?: string
  }[]
}

/**
 * 接口 [save search condition↗](http://192.168.2.9:3000/project/17/interface/api/6044) 的 **返回类型**
 *
 * @分类 [search condition↗](http://192.168.2.9:3000/project/17/interface/api/cat_964)
 * @请求头 `POST /driver/searchCondition/save`
 * @更新时间 `2024-11-23 14:26:56`
 */
export interface DriverSearchConditionSaveResponse {}

/**
 * 接口 [get search condition for driver↗](http://192.168.2.9:3000/project/17/interface/api/6051) 的 **请求类型**
 *
 * @分类 [search condition↗](http://192.168.2.9:3000/project/17/interface/api/cat_964)
 * @请求头 `GET /driver/searchCondition/getSearchCondition`
 * @更新时间 `2024-11-23 14:26:57`
 */
export interface DriverSearchConditionGetSearchConditionRequest {}

/**
 * 接口 [get search condition for driver↗](http://192.168.2.9:3000/project/17/interface/api/6051) 的 **返回类型**
 *
 * @分类 [search condition↗](http://192.168.2.9:3000/project/17/interface/api/cat_964)
 * @请求头 `GET /driver/searchCondition/getSearchCondition`
 * @更新时间 `2024-11-23 14:26:57`
 */
export interface DriverSearchConditionGetSearchConditionResponse {
  /**
   * 1:yes,0:no
   */
  isRegularDeliveries?: string
  /**
   * 1:yes,0:no
   */
  isExpressDeliveries?: string
  entireSize?: string
  distance?: number
  pickupLongitude?: string
  pickupLatitude?: string
  dropOffLongitude?: string
  dropOffLatitude?: string
  coordinateString?: string
}

/**
 * 接口 [delete the search condition for driver↗](http://192.168.2.9:3000/project/17/interface/api/6058) 的 **请求类型**
 *
 * @分类 [search condition↗](http://192.168.2.9:3000/project/17/interface/api/cat_964)
 * @请求头 `POST /driver/searchCondition/delete`
 * @更新时间 `2024-11-23 14:26:57`
 */
export interface DriverSearchConditionDeleteRequest {}

/**
 * 接口 [delete the search condition for driver↗](http://192.168.2.9:3000/project/17/interface/api/6058) 的 **返回类型**
 *
 * @分类 [search condition↗](http://192.168.2.9:3000/project/17/interface/api/cat_964)
 * @请求头 `POST /driver/searchCondition/delete`
 * @更新时间 `2024-11-23 14:26:57`
 */
export interface DriverSearchConditionDeleteResponse {}

/**
 * 接口 [upload file↗](http://192.168.2.9:3000/project/16/interface/api/6821) 的 **请求类型**
 *
 * @分类 [file↗](http://192.168.2.9:3000/project/16/interface/api/cat_1134)
 * @请求头 `POST /member/file/uploadFile`
 * @更新时间 `2023-12-07 11:43:06`
 */
export interface MemberFileUploadFileRequest {
  file?: FileData
}

/**
 * 接口 [upload file↗](http://192.168.2.9:3000/project/16/interface/api/6821) 的 **返回类型**
 *
 * @分类 [file↗](http://192.168.2.9:3000/project/16/interface/api/cat_1134)
 * @请求头 `POST /member/file/uploadFile`
 * @更新时间 `2023-12-07 11:43:06`
 */
export interface MemberFileUploadFileResponse {
  /**
   * 文件名称
   */
  fileName?: string
  /**
   * 地址
   */
  url?: string
}

/**
 * 接口 [send msg↗](http://192.168.2.9:3000/project/16/interface/api/10011) 的 **请求类型**
 *
 * @分类 [common tool↗](http://192.168.2.9:3000/project/16/interface/api/cat_1560)
 * @请求头 `POST /member/common/sendMsg`
 * @更新时间 `2024-03-18 22:57:21`
 */
export interface MemberCommonSendMsgRequest {
  /**
   * REGISTER,LOGIN,FORGET_PWD
   */
  type: string
  mobilePhone: string
}

/**
 * 接口 [send msg↗](http://192.168.2.9:3000/project/16/interface/api/10011) 的 **返回类型**
 *
 * @分类 [common tool↗](http://192.168.2.9:3000/project/16/interface/api/cat_1560)
 * @请求头 `POST /member/common/sendMsg`
 * @更新时间 `2024-03-18 22:57:21`
 */
export interface MemberCommonSendMsgResponse {}

/**
 * 接口 [send email↗](http://192.168.2.9:3000/project/16/interface/api/10407) 的 **请求类型**
 *
 * @分类 [common tool↗](http://192.168.2.9:3000/project/16/interface/api/cat_1560)
 * @请求头 `POST /member/common/sendEmail`
 * @更新时间 `2024-03-18 22:57:21`
 */
export interface MemberCommonSendEmailRequest {
  email: string
  /**
   * CODE:Verification code(default), UPDATE_PWD: update password
   */
  type?: string
}

/**
 * 接口 [send email↗](http://192.168.2.9:3000/project/16/interface/api/10407) 的 **返回类型**
 *
 * @分类 [common tool↗](http://192.168.2.9:3000/project/16/interface/api/cat_1560)
 * @请求头 `POST /member/common/sendEmail`
 * @更新时间 `2024-03-18 22:57:21`
 */
export interface MemberCommonSendEmailResponse {}

/**
 * 接口 [job template list↗](http://192.168.2.9:3000/project/16/interface/api/10419) 的 **请求类型**
 *
 * @分类 [job template↗](http://192.168.2.9:3000/project/16/interface/api/cat_1686)
 * @请求头 `GET /member/jobTemplate/getTemplateList`
 * @更新时间 `2024-11-23 14:27:35`
 */
export interface MemberJobTemplateGetTemplateListRequest {}

/**
 * 接口 [job template list↗](http://192.168.2.9:3000/project/16/interface/api/10419) 的 **返回类型**
 *
 * @分类 [job template↗](http://192.168.2.9:3000/project/16/interface/api/cat_1686)
 * @请求头 `GET /member/jobTemplate/getTemplateList`
 * @更新时间 `2024-11-23 14:27:35`
 */
export type MemberJobTemplateGetTemplateListResponse = {
  uid?: string
  templateName?: string
}[]

/**
 * 接口 [job template detail↗](http://192.168.2.9:3000/project/16/interface/api/10425) 的 **请求类型**
 *
 * @分类 [job template↗](http://192.168.2.9:3000/project/16/interface/api/cat_1686)
 * @请求头 `GET /member/jobTemplate/detail`
 * @更新时间 `2024-11-23 14:27:36`
 */
export interface MemberJobTemplateDetailRequest {
  uid?: string
}

/**
 * 接口 [job template detail↗](http://192.168.2.9:3000/project/16/interface/api/10425) 的 **返回类型**
 *
 * @分类 [job template↗](http://192.168.2.9:3000/project/16/interface/api/cat_1686)
 * @请求头 `GET /member/jobTemplate/detail`
 * @更新时间 `2024-11-23 14:27:36`
 */
export interface MemberJobTemplateDetailResponse {
  uid?: string
  templateName?: string
  descriptiveTitle?: string
  quantityOfItems?: number
  entireSize?: string
  photoOfItemList?: string[]
  /**
   * 1:yes 0:no
   */
  isItemGreater?: string
  width?: number
  height?: number
  length?: number
  weight?: number
  unitOfLength?: string
  unitOfWeight?: string
  itemDescription?: string
}

/**
 * 接口 [Paging notification↗](http://192.168.2.9:3000/project/16/interface/api/10461) 的 **请求类型**
 *
 * @分类 [notification↗](http://192.168.2.9:3000/project/16/interface/api/cat_1728)
 * @请求头 `POST /member/notification/queryPage`
 * @更新时间 `2024-11-22 23:28:02`
 */
export interface MemberNotificationQueryPageRequest {
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [Paging notification↗](http://192.168.2.9:3000/project/16/interface/api/10461) 的 **返回类型**
 *
 * @分类 [notification↗](http://192.168.2.9:3000/project/16/interface/api/cat_1728)
 * @请求头 `POST /member/notification/queryPage`
 * @更新时间 `2024-11-22 23:28:02`
 */
export interface MemberNotificationQueryPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    uid?: string
    jobUid?: string
    title?: string
    avatarUrl?: string
    driverId?: string
    /**
     * NotificationTypeEnums
     */
    type?: string
    content?: string
    businessUid?: string
    /**
     * 1:yes 0:no
     */
    isRead?: string
    createTime?: string
    displayTime?: string
  }[]
}

/**
 * 接口 [get count of unread notification↗](http://192.168.2.9:3000/project/16/interface/api/10953) 的 **请求类型**
 *
 * @分类 [notification↗](http://192.168.2.9:3000/project/16/interface/api/cat_1728)
 * @请求头 `GET /member/notification/getUnReadCount`
 * @更新时间 `2024-11-22 23:28:03`
 */
export interface MemberNotificationGetUnReadCountRequest {}

/**
 * 接口 [get count of unread notification↗](http://192.168.2.9:3000/project/16/interface/api/10953) 的 **返回类型**
 *
 * @分类 [notification↗](http://192.168.2.9:3000/project/16/interface/api/cat_1728)
 * @请求头 `GET /member/notification/getUnReadCount`
 * @更新时间 `2024-11-22 23:28:03`
 */
export interface MemberNotificationGetUnReadCountResponse {
  unReadCount?: number
}

/**
 * 接口 [read notification↗](http://192.168.2.9:3000/project/16/interface/api/10955) 的 **请求类型**
 *
 * @分类 [notification↗](http://192.168.2.9:3000/project/16/interface/api/cat_1728)
 * @请求头 `POST /member/notification/read`
 * @更新时间 `2024-11-22 23:28:03`
 */
export interface MemberNotificationReadRequest {
  uid?: string
}

/**
 * 接口 [read notification↗](http://192.168.2.9:3000/project/16/interface/api/10955) 的 **返回类型**
 *
 * @分类 [notification↗](http://192.168.2.9:3000/project/16/interface/api/cat_1728)
 * @请求头 `POST /member/notification/read`
 * @更新时间 `2024-11-22 23:28:03`
 */
export interface MemberNotificationReadResponse {}

/**
 * 接口 [register↗](http://192.168.2.9:3000/project/16/interface/api/4441) 的 **请求类型**
 *
 * @分类 [User management↗](http://192.168.2.9:3000/project/16/interface/api/cat_649)
 * @请求头 `POST /member/member/register`
 * @更新时间 `2024-04-30 16:07:26`
 */
export interface MemberMemberRegisterRequest {
  fullName: string
  email: string
  cellPhone: string
  password: string
  /**
   * 1:yes 0:no
   */
  isCompany?: string
  companyName?: string
  referralCode?: string
}

/**
 * 接口 [register↗](http://192.168.2.9:3000/project/16/interface/api/4441) 的 **返回类型**
 *
 * @分类 [User management↗](http://192.168.2.9:3000/project/16/interface/api/cat_649)
 * @请求头 `POST /member/member/register`
 * @更新时间 `2024-04-30 16:07:26`
 */
export interface MemberMemberRegisterResponse {}

/**
 * 接口 [login↗](http://192.168.2.9:3000/project/16/interface/api/4448) 的 **请求类型**
 *
 * @分类 [User management↗](http://192.168.2.9:3000/project/16/interface/api/cat_649)
 * @请求头 `POST /member/member/login`
 * @更新时间 `2024-04-30 16:07:26`
 */
export interface MemberMemberLoginRequest {
  email: string
  password: string
}

/**
 * 接口 [login↗](http://192.168.2.9:3000/project/16/interface/api/4448) 的 **返回类型**
 *
 * @分类 [User management↗](http://192.168.2.9:3000/project/16/interface/api/cat_649)
 * @请求头 `POST /member/member/login`
 * @更新时间 `2024-04-30 16:07:26`
 */
export interface MemberMemberLoginResponse {
  memberId?: string
  fullName?: string
  token?: string
  expire?: string
}

/**
 * 接口 [logout↗](http://192.168.2.9:3000/project/16/interface/api/4455) 的 **请求类型**
 *
 * @分类 [User management↗](http://192.168.2.9:3000/project/16/interface/api/cat_649)
 * @请求头 `POST /member/member/logout`
 * @更新时间 `2024-04-30 16:07:26`
 */
export interface MemberMemberLogoutRequest {}

/**
 * 接口 [logout↗](http://192.168.2.9:3000/project/16/interface/api/4455) 的 **返回类型**
 *
 * @分类 [User management↗](http://192.168.2.9:3000/project/16/interface/api/cat_649)
 * @请求头 `POST /member/member/logout`
 * @更新时间 `2024-04-30 16:07:26`
 */
export interface MemberMemberLogoutResponse {}

/**
 * 接口 [Obtain information about the current login user↗](http://192.168.2.9:3000/project/16/interface/api/4462) 的 **请求类型**
 *
 * @分类 [User management↗](http://192.168.2.9:3000/project/16/interface/api/cat_649)
 * @请求头 `GET /member/member/getCurrentMemberInfo`
 * @更新时间 `2024-04-30 16:07:27`
 */
export interface MemberMemberGetCurrentMemberInfoRequest {}

/**
 * 接口 [Obtain information about the current login user↗](http://192.168.2.9:3000/project/16/interface/api/4462) 的 **返回类型**
 *
 * @分类 [User management↗](http://192.168.2.9:3000/project/16/interface/api/cat_649)
 * @请求头 `GET /member/member/getCurrentMemberInfo`
 * @更新时间 `2024-04-30 16:07:27`
 */
export interface MemberMemberGetCurrentMemberInfoResponse {
  memberId?: string
  fullName?: string
  profileImg?: string
  email?: string
  cellPhone?: string
  dateOfBirth?: string
  houseNo?: string
  address?: string
  state?: string
  city?: string
  addressDetail?: string
  postCode?: string
  /**
   * My reference code
   */
  referralCode?: string
  /**
   * 1:yes 0:no
   */
  isPerfect?: string
}

/**
 * 接口 [Update the basic information about the current login user↗](http://192.168.2.9:3000/project/16/interface/api/4469) 的 **请求类型**
 *
 * @分类 [User management↗](http://192.168.2.9:3000/project/16/interface/api/cat_649)
 * @请求头 `POST /member/member/updateMemberInfo`
 * @更新时间 `2024-04-30 16:07:30`
 */
export interface MemberMemberUpdateMemberInfoRequest {
  email?: string
  cellPhone?: string
  fullName: string
  profileImg?: string
  dateOfBirth: string
  houseNo?: string
  address?: string
  state?: string
  city?: string
  addressDetail?: string
  postCode: string
}

/**
 * 接口 [Update the basic information about the current login user↗](http://192.168.2.9:3000/project/16/interface/api/4469) 的 **返回类型**
 *
 * @分类 [User management↗](http://192.168.2.9:3000/project/16/interface/api/cat_649)
 * @请求头 `POST /member/member/updateMemberInfo`
 * @更新时间 `2024-04-30 16:07:30`
 */
export interface MemberMemberUpdateMemberInfoResponse {}

/**
 * 接口 [Change the password using the email address↗](http://192.168.2.9:3000/project/16/interface/api/4476) 的 **请求类型**
 *
 * @分类 [User management↗](http://192.168.2.9:3000/project/16/interface/api/cat_649)
 * @请求头 `POST /member/member/updatePwd`
 * @更新时间 `2024-04-30 16:07:30`
 */
export interface MemberMemberUpdatePwdRequest {
  email: string
  password: string
  VerificationCode: string
}

/**
 * 接口 [Change the password using the email address↗](http://192.168.2.9:3000/project/16/interface/api/4476) 的 **返回类型**
 *
 * @分类 [User management↗](http://192.168.2.9:3000/project/16/interface/api/cat_649)
 * @请求头 `POST /member/member/updatePwd`
 * @更新时间 `2024-04-30 16:07:30`
 */
export interface MemberMemberUpdatePwdResponse {}

/**
 * 接口 [Get notification setting↗](http://192.168.2.9:3000/project/16/interface/api/4854) 的 **请求类型**
 *
 * @分类 [User management↗](http://192.168.2.9:3000/project/16/interface/api/cat_649)
 * @请求头 `GET /member/member/getNotificationSetting`
 * @更新时间 `2024-04-30 16:07:31`
 */
export interface MemberMemberGetNotificationSettingRequest {}

/**
 * 接口 [Get notification setting↗](http://192.168.2.9:3000/project/16/interface/api/4854) 的 **返回类型**
 *
 * @分类 [User management↗](http://192.168.2.9:3000/project/16/interface/api/cat_649)
 * @请求头 `GET /member/member/getNotificationSetting`
 * @更新时间 `2024-04-30 16:07:31`
 */
export interface MemberMemberGetNotificationSettingResponse {
  /**
   * 1:yes 0:no
   */
  appNewBidReceived?: string
  /**
   * 1:yes 0:no
   */
  appExpressJobAccepted?: string
  /**
   * 1:yes 0:no
   */
  appItemPickedUp?: string
  /**
   * 1:yes 0:no
   */
  appItemDelivered?: string
  /**
   * 1:yes 0:no
   */
  appNewMessage?: string
  /**
   * 1:yes 0:no
   */
  appJobSearchMatches?: string
  /**
   * 1:yes 0:no
   */
  emailNewBidReceived?: string
  /**
   * 1:yes 0:no
   */
  emailExpressJobAccepted?: string
  /**
   * 1:yes 0:no
   */
  emailItemPickedUp?: string
  /**
   * 1:yes 0:no
   */
  emailItemDelivered?: string
  /**
   * 1:yes 0:no
   */
  emailJobSearchMatches?: string
  /**
   * 1:yes 0:no
   */
  emailReviewDriver?: string
}

/**
 * 接口 [Update notification setting↗](http://192.168.2.9:3000/project/16/interface/api/4861) 的 **请求类型**
 *
 * @分类 [User management↗](http://192.168.2.9:3000/project/16/interface/api/cat_649)
 * @请求头 `POST /member/member/updateNotificationSetting`
 * @更新时间 `2024-04-30 16:07:31`
 */
export interface MemberMemberUpdateNotificationSettingRequest {
  /**
   * 1:yes 0:no
   */
  appNewBidReceived?: string
  /**
   * 1:yes 0:no
   */
  appExpressJobAccepted?: string
  /**
   * 1:yes 0:no
   */
  appItemPickedUp?: string
  /**
   * 1:yes 0:no
   */
  appItemDelivered?: string
  /**
   * 1:yes 0:no
   */
  appNewMessage?: string
  /**
   * 1:yes 0:no
   */
  appJobSearchMatches?: string
  /**
   * 1:yes 0:no
   */
  emailNewBidReceived?: string
  /**
   * 1:yes 0:no
   */
  emailExpressJobAccepted?: string
  /**
   * 1:yes 0:no
   */
  emailItemPickedUp?: string
  /**
   * 1:yes 0:no
   */
  emailItemDelivered?: string
  /**
   * 1:yes 0:no
   */
  emailJobSearchMatches?: string
  /**
   * 1:yes 0:no
   */
  emailReviewDriver?: string
}

/**
 * 接口 [Update notification setting↗](http://192.168.2.9:3000/project/16/interface/api/4861) 的 **返回类型**
 *
 * @分类 [User management↗](http://192.168.2.9:3000/project/16/interface/api/cat_649)
 * @请求头 `POST /member/member/updateNotificationSetting`
 * @更新时间 `2024-04-30 16:07:31`
 */
export interface MemberMemberUpdateNotificationSettingResponse {}

/**
 * 接口 [Change the password online↗](http://192.168.2.9:3000/project/16/interface/api/6954) 的 **请求类型**
 *
 * @分类 [User management↗](http://192.168.2.9:3000/project/16/interface/api/cat_649)
 * @请求头 `POST /member/member/updatePwdOnline`
 * @更新时间 `2024-04-30 16:07:30`
 */
export interface MemberMemberUpdatePwdOnlineRequest {
  oldPassword: string
  newPassword: string
}

/**
 * 接口 [Change the password online↗](http://192.168.2.9:3000/project/16/interface/api/6954) 的 **返回类型**
 *
 * @分类 [User management↗](http://192.168.2.9:3000/project/16/interface/api/cat_649)
 * @请求头 `POST /member/member/updatePwdOnline`
 * @更新时间 `2024-04-30 16:07:30`
 */
export interface MemberMemberUpdatePwdOnlineResponse {}

/**
 * 接口 [send verify code↗](http://192.168.2.9:3000/project/16/interface/api/10005) 的 **请求类型**
 *
 * @分类 [User management↗](http://192.168.2.9:3000/project/16/interface/api/cat_649)
 * @请求头 `POST /member/member/sendVerifyCode`
 * @更新时间 `2024-04-30 16:07:31`
 */
export interface MemberMemberSendVerifyCodeRequest {
  /**
   * email
   */
  email: string
}

/**
 * 接口 [send verify code↗](http://192.168.2.9:3000/project/16/interface/api/10005) 的 **返回类型**
 *
 * @分类 [User management↗](http://192.168.2.9:3000/project/16/interface/api/cat_649)
 * @请求头 `POST /member/member/sendVerifyCode`
 * @更新时间 `2024-04-30 16:07:31`
 */
export interface MemberMemberSendVerifyCodeResponse {}

/**
 * 接口 [update FCM token↗](http://192.168.2.9:3000/project/16/interface/api/10557) 的 **请求类型**
 *
 * @分类 [User management↗](http://192.168.2.9:3000/project/16/interface/api/cat_649)
 * @请求头 `POST /member/member/updateFCMToken`
 * @更新时间 `2024-04-30 16:07:31`
 */
export interface MemberMemberUpdateFcmTokenRequest {
  fcmToken: string
}

/**
 * 接口 [update FCM token↗](http://192.168.2.9:3000/project/16/interface/api/10557) 的 **返回类型**
 *
 * @分类 [User management↗](http://192.168.2.9:3000/project/16/interface/api/cat_649)
 * @请求头 `POST /member/member/updateFCMToken`
 * @更新时间 `2024-04-30 16:07:31`
 */
export interface MemberMemberUpdateFcmTokenResponse {}

/**
 * 接口 [update password by email link↗](http://192.168.2.9:3000/project/16/interface/api/10961) 的 **请求类型**
 *
 * @分类 [User management↗](http://192.168.2.9:3000/project/16/interface/api/cat_649)
 * @请求头 `POST /member/member/updatePwdByCode`
 * @更新时间 `2024-04-30 16:07:30`
 */
export interface MemberMemberUpdatePwdByCodeRequest {
  code: string
  password: string
}

/**
 * 接口 [update password by email link↗](http://192.168.2.9:3000/project/16/interface/api/10961) 的 **返回类型**
 *
 * @分类 [User management↗](http://192.168.2.9:3000/project/16/interface/api/cat_649)
 * @请求头 `POST /member/member/updatePwdByCode`
 * @更新时间 `2024-04-30 16:07:30`
 */
export interface MemberMemberUpdatePwdByCodeResponse {}

/**
 * 接口 [create job↗](http://192.168.2.9:3000/project/16/interface/api/4721) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `POST /member/job/createJob`
 * @更新时间 `2024-11-25 11:37:24`
 */
export interface MemberJobCreateJobRequest {
  pickupLocation: string
  pickupCity?: string
  pickupArea?: string
  /**
   * @Length(max = 200, message = "Pickup adress cannot exceed 200 characters")
   */
  pickupAddress?: string
  pickupAddressName?: string
  pickupLongitude: string
  pickupLatitude: string
  dropOffLocation: string
  dropOffCity?: string
  dropOffArea?: string
  /**
   * @Length(max = 200, message = "Drop off address cannot exceed 200 characters")
   */
  dropOffAddress?: string
  dropOffAddressName?: string
  dropOffLongitude: string
  dropOffLatitude: string
  estimatedPrice: number
  /**
   * 1:yes,0:no
   */
  isExpressListing?: string
  /**
   * @Length(max = 500, message = "Tip or bonus cannot exceed 500 characters")
   */
  tipOrBonus?: number
  descriptiveTitle: string
  quantityOfItems: number
  entireSize: string
  photoOfItemList: string[]
  /**
   * 1:yes 0:no
   */
  isItemGreater?: string
  width?: number
  height?: number
  length?: number
  weight?: number
  unitOfLength?: string
  unitOfWeight?: string
  itemDescription?: string
  orderRefNumber?: string
  pickupContactUserName: string
  pickupContactPhone: string
  pickupContactEmail: string
  /**
   * @NotNull(message = "Pickup start date is required")
   */
  pickupStartTime?: string
  /**
   * @NotNull(message = "Pickup end date is required")
   */
  pickupEndTime?: string
  /**
   * 1:yes 0:no
   */
  isAllowAnyTime?: string
  privateInformation?: string
  driverQualification?: number
  receiveContactUserName: string
  receiveContactPhone: string
  /**
   * @NotBlank(message = "Receive contact email is required")
   */
  receiveContactEmail?: string
  deliveryTime?: string
  deliveryDeadlineTime?: string
  dropOffDetails?: string
  /**
   * 1：yes 0:no
   */
  isSaveTemplate?: string
  templateName?: string
}

/**
 * 接口 [create job↗](http://192.168.2.9:3000/project/16/interface/api/4721) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `POST /member/job/createJob`
 * @更新时间 `2024-11-25 11:37:24`
 */
export interface MemberJobCreateJobResponse {
  jobUid?: string
}

/**
 * 接口 [Paging query job list↗](http://192.168.2.9:3000/project/16/interface/api/4728) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `POST /member/job/queryPage`
 * @更新时间 `2024-11-25 11:37:25`
 */
export interface MemberJobQueryPageRequest {
  keywords?: string
  /**
   * OPEN_LISTINGS、OPEN_BIDS、ACTIVE_DELIVERIES、COMPLETED
   */
  type: string
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [Paging query job list↗](http://192.168.2.9:3000/project/16/interface/api/4728) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `POST /member/job/queryPage`
 * @更新时间 `2024-11-25 11:37:25`
 */
export interface MemberJobQueryPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    uid?: string
    descriptiveTitle?: string
    pickupLocation?: string
    pickupCity?: string
    pickupArea?: string
    pickupAddressName?: string
    pickupLongitude?: string
    pickupLatitude?: string
    dropOffLocation?: string
    dropOffCity?: string
    dropOffArea?: string
    dropOffAddressName?: string
    dropOffLongitude?: string
    dropOffLatitude?: string
    estimatedPrice?: number
    memberPayAmount?: number
    photoOfItemList?: string[]
    /**
     * 1:yes,0:no
     */
    isExpressListing?: string
    /**
     * 1=activate 0=deactivate
     */
    activate?: string
    tipOrBonus?: number
    displayAmount?: number
    status?: string
    amountTitle?: string
  }[]
}

/**
 * 接口 [job detail↗](http://192.168.2.9:3000/project/16/interface/api/4735) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `GET /member/job/detail`
 * @更新时间 `2024-11-25 11:37:26`
 */
export interface MemberJobDetailRequest {
  uid?: string
}

/**
 * 接口 [job detail↗](http://192.168.2.9:3000/project/16/interface/api/4735) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `GET /member/job/detail`
 * @更新时间 `2024-11-25 11:37:26`
 */
export interface MemberJobDetailResponse {
  uid?: string
  descriptiveTitle?: string
  itemDescription?: string
  pickupLocation?: string
  pickupCity?: string
  pickupArea?: string
  pickupAddress?: string
  pickupAddressName?: string
  pickupLongitude?: string
  pickupLatitude?: string
  pickupStartTime?: string
  pickupEndTime?: string
  dropOffLocation?: string
  dropOffCity?: string
  dropOffArea?: string
  dropOffAddress?: string
  dropOffAddressName?: string
  dropOffLongitude?: string
  dropOffLatitude?: string
  estimatedPrice?: number
  bestPrice?: number
  memberPayAmount?: number
  entireSize?: string
  entireSizeDesc?: string
  quantityOfItems?: number
  orderRefNumber?: string
  photoOfItemList?: string[]
  /**
   * 1:yes,0:no
   */
  isExpressListing?: string
  /**
   * status
   * Normal job：
   * ACCEPT_BID = Confirmed
   * READY_PICKUP = packed
   * IN_TRANSIT = In Transit
   * DELIVERED = Delivered
   *
   * Express job:
   * PAID = Posted & Packed
   * READY_PICKUP = Driver Confirmed
   * IN_TRANSIT = In Transit
   * DELIVERED = Delivered
   */
  status?: string
  tipOrBonus?: number
  creditFee?: number
  /**
   * 1:yes 0:no
   */
  isAllowAnyTime?: string
  driverQualification?: number
  /**
   * 1：yes 0:no
   */
  isSaveTemplate?: string
  templateName?: string
  memberId?: string
  driverId?: string
  driverCellPhone?: string
  driverName?: string
  driverProfileImg?: string
  /**
   * WAIT_PAY,FINISH,CANCEL
   */
  orderStatus?: string
  orderNo?: string
  /**
   * 1:yes 0:no
   */
  isReview?: string
  shareUrl?: string
  expectedDeliveryTime?: string
  pendingTime?: string
  pickTime?: string
  InTransitTime?: string
  deliveredTime?: string
  deliveryDeadline?: string
  createTime?: string
  viewsCount?: number
  /**
   * 1=activate 0=deactivate
   */
  activate?: string
  paidTime?: string
  driverConfirmTime?: string
  displayAmount?: number
  amountTitle?: string
}

/**
 * 接口 [modify pickup window↗](http://192.168.2.9:3000/project/16/interface/api/4763) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `POST /member/job/updatePickupWindow`
 * @更新时间 `2024-11-25 11:37:27`
 */
export interface MemberJobUpdatePickupWindowRequest {
  uid: string
  pickupStartTime: string
  pickupEndTime: string
}

/**
 * 接口 [modify pickup window↗](http://192.168.2.9:3000/project/16/interface/api/4763) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `POST /member/job/updatePickupWindow`
 * @更新时间 `2024-11-25 11:37:27`
 */
export interface MemberJobUpdatePickupWindowResponse {}

/**
 * 接口 [confirm ready for pickup↗](http://192.168.2.9:3000/project/16/interface/api/4770) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `POST /member/job/pickup`
 * @更新时间 `2024-11-25 11:37:26`
 */
export interface MemberJobPickupRequest {
  uid: string
  productImageList: string[]
}

/**
 * 接口 [confirm ready for pickup↗](http://192.168.2.9:3000/project/16/interface/api/4770) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `POST /member/job/pickup`
 * @更新时间 `2024-11-25 11:37:26`
 */
export interface MemberJobPickupResponse {}

/**
 * 接口 [complete↗](http://192.168.2.9:3000/project/16/interface/api/4777) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `POST /member/job/complete`
 * @更新时间 `2024-11-25 11:37:27`
 */
export interface MemberJobCompleteRequest {
  uid: string
}

/**
 * 接口 [complete↗](http://192.168.2.9:3000/project/16/interface/api/4777) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `POST /member/job/complete`
 * @更新时间 `2024-11-25 11:37:27`
 */
export interface MemberJobCompleteResponse {}

/**
 * 接口 [my peerhaul deliveries↗](http://192.168.2.9:3000/project/16/interface/api/4833) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `GET /member/job/deliverChart`
 * @更新时间 `2024-11-25 11:37:27`
 */
export interface MemberJobDeliverChartRequest {}

/**
 * 接口 [my peerhaul deliveries↗](http://192.168.2.9:3000/project/16/interface/api/4833) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `GET /member/job/deliverChart`
 * @更新时间 `2024-11-25 11:37:27`
 */
export type MemberJobDeliverChartResponse = {
  month?: number
  monthAlias?: string
  count?: number
}[]

/**
 * 接口 [review driver↗](http://192.168.2.9:3000/project/16/interface/api/4875) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `POST /member/job/review`
 * @更新时间 `2024-11-25 11:37:28`
 */
export interface MemberJobReviewRequest {
  jobUid: string
  score: number
  evaluateDesc?: string
}

/**
 * 接口 [review driver↗](http://192.168.2.9:3000/project/16/interface/api/4875) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `POST /member/job/review`
 * @更新时间 `2024-11-25 11:37:28`
 */
export interface MemberJobReviewResponse {}

/**
 * 接口 [delete job↗](http://192.168.2.9:3000/project/16/interface/api/5260) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `POST /member/job/delete`
 * @更新时间 `2024-11-25 11:37:28`
 */
export interface MemberJobDeleteRequest {
  uid: string
}

/**
 * 接口 [delete job↗](http://192.168.2.9:3000/project/16/interface/api/5260) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `POST /member/job/delete`
 * @更新时间 `2024-11-25 11:37:28`
 */
export interface MemberJobDeleteResponse {}

/**
 * 接口 [cancel job↗](http://192.168.2.9:3000/project/16/interface/api/5267) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `POST /member/job/cancel`
 * @更新时间 `2024-11-25 11:37:28`
 */
export interface MemberJobCancelRequest {
  uid: string
}

/**
 * 接口 [cancel job↗](http://192.168.2.9:3000/project/16/interface/api/5267) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `POST /member/job/cancel`
 * @更新时间 `2024-11-25 11:37:28`
 */
export interface MemberJobCancelResponse {}

/**
 * 接口 [update job↗](http://192.168.2.9:3000/project/16/interface/api/5428) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `POST /member/job/updateJob`
 * @更新时间 `2024-11-25 11:37:25`
 */
export interface MemberJobUpdateJobRequest {
  uid: string
  pickupLocation?: string
  pickupCity?: string
  /**
   * @Length(max = 200, message = "Pickup address cannot exceed 200 characters")
   */
  pickupAddress?: string
  pickupAddressName?: string
  pickupLongitude?: string
  pickupLatitude?: string
  dropOffLocation?: string
  dropOffCity?: string
  /**
   * @Length(max = 200, message = "Drop off address cannot exceed 200 characters")
   */
  dropOffAddress?: string
  dropOffAddressName?: string
  dropOffLongitude?: string
  dropOffLatitude?: string
  estimatedPrice?: number
  /**
   * 1:yes,0:no
   */
  isExpressListing?: string
  /**
   * @Length(max = 500, message = "Tip or bonus cannot exceed 500 characters")
   */
  tipOrBonus?: number
  descriptiveTitle?: string
  quantityOfItems?: number
  entireSize?: string
  photoOfItemList?: string[]
  /**
   * 1:yes 0:no
   */
  isItemGreater?: string
  width?: number
  height?: number
  length?: number
  weight?: number
  unitOfLength?: string
  unitOfWeight?: string
  itemDescription?: string
  orderRefNumber?: string
  pickupContactUserName?: string
  pickupContactPhone?: string
  pickupContactEmail?: string
  pickupStartTime?: string
  pickupEndTime?: string
  /**
   * 1:yes 0:no
   */
  isAllowAnyTime?: string
  privateInformation?: string
  driverQualification?: number
  receiveContactUserName: string
  receiveContactPhone?: string
  receiveContactEmail?: string
  deliveryTime?: string
  deliveryDeadlineTime?: string
  dropOffDetails?: string
  /**
   * 1：yes 0:no
   */
  isSaveTemplate?: string
  templateName?: string
}

/**
 * 接口 [update job↗](http://192.168.2.9:3000/project/16/interface/api/5428) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `POST /member/job/updateJob`
 * @更新时间 `2024-11-25 11:37:25`
 */
export interface MemberJobUpdateJobResponse {}

/**
 * 接口 [driver no show↗](http://192.168.2.9:3000/project/16/interface/api/5435) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `POST /member/job/driverNoShow`
 * @更新时间 `2024-11-25 11:37:28`
 */
export interface MemberJobDriverNoShowRequest {
  uid: string
}

/**
 * 接口 [driver no show↗](http://192.168.2.9:3000/project/16/interface/api/5435) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `POST /member/job/driverNoShow`
 * @更新时间 `2024-11-25 11:37:28`
 */
export interface MemberJobDriverNoShowResponse {}

/**
 * 接口 [deactivate↗](http://192.168.2.9:3000/project/16/interface/api/5442) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `POST /member/job/deactivate`
 * @更新时间 `2024-11-25 11:37:29`
 */
export interface MemberJobDeactivateRequest {
  uid: string
}

/**
 * 接口 [deactivate↗](http://192.168.2.9:3000/project/16/interface/api/5442) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `POST /member/job/deactivate`
 * @更新时间 `2024-11-25 11:37:29`
 */
export interface MemberJobDeactivateResponse {}

/**
 * 接口 [compute estimate price↗](http://192.168.2.9:3000/project/16/interface/api/5449) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `POST /member/job/computeEstimatePrice`
 * @更新时间 `2024-11-25 11:37:29`
 */
export interface MemberJobComputeEstimatePriceRequest {
  pickupLongitude: string
  pickupLatitude: string
  dropOffLongitude: string
  dropOffLatitude: string
  entireSize: string
  /**
   * 1:yes,0:no
   */
  isExpressListing: string
}

/**
 * 接口 [compute estimate price↗](http://192.168.2.9:3000/project/16/interface/api/5449) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `POST /member/job/computeEstimatePrice`
 * @更新时间 `2024-11-25 11:37:29`
 */
export interface MemberJobComputeEstimatePriceResponse {
  price?: number
}

/**
 * 接口 [delivery detail↗](http://192.168.2.9:3000/project/16/interface/api/6219) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `GET /member/job/deliveryDetail`
 * @更新时间 `2024-11-25 11:37:26`
 */
export interface MemberJobDeliveryDetailRequest {
  uid?: string
}

/**
 * 接口 [delivery detail↗](http://192.168.2.9:3000/project/16/interface/api/6219) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `GET /member/job/deliveryDetail`
 * @更新时间 `2024-11-25 11:37:26`
 */
export interface MemberJobDeliveryDetailResponse {
  uid?: string
  pickupContactUserName?: string
  pickupContactPhone?: string
  pickupContactEmail?: string
  pickupStartTime?: string
  pickupEndTime?: string
  privateInformation?: string
  receiveContactUserName?: string
  receiveContactPhone?: string
  receiveContactEmail?: string
  dropOffDetails?: string
  deliveryDeadlineTime?: string
  paymentReleasedTime?: string
  customerProductImageList?: string[]
  driverProductImageList?: string[]
  dropOffImageList?: string[]
  /**
   * 1:rated 0:no rate
   */
  isRate?: string
  score?: number
  /**
   * 1:yes 0:no
   */
  isItemGreater?: string
  width?: number
  height?: number
  length?: number
  weight?: number
  unitOfLength?: string
  unitOfWeight?: string
  itemDescription?: string
}

/**
 * 接口 [activate↗](http://192.168.2.9:3000/project/16/interface/api/10545) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `POST /member/job/activate`
 * @更新时间 `2024-11-25 11:37:29`
 */
export interface MemberJobActivateRequest {
  uid: string
}

/**
 * 接口 [activate↗](http://192.168.2.9:3000/project/16/interface/api/10545) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `POST /member/job/activate`
 * @更新时间 `2024-11-25 11:37:29`
 */
export interface MemberJobActivateResponse {}

/**
 * 接口 [index job list↗](http://192.168.2.9:3000/project/16/interface/api/10965) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `GET /member/job/getIndexJobList`
 * @更新时间 `2024-11-25 11:37:24`
 */
export interface MemberJobGetIndexJobListRequest {}

/**
 * 接口 [index job list↗](http://192.168.2.9:3000/project/16/interface/api/10965) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `GET /member/job/getIndexJobList`
 * @更新时间 `2024-11-25 11:37:24`
 */
export type MemberJobGetIndexJobListResponse = {
  descriptiveTitle?: string
  entireSize?: string
  photo?: string
  estimatedPrice?: number
  itemDescription?: string
  tipOrBonus?: number
  displayAmount?: number
}[]

/**
 * 接口 [Paging query all job list↗](http://192.168.2.9:3000/project/16/interface/api/11275) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `POST /member/job/queryAllJobPage`
 * @更新时间 `2024-11-25 11:37:25`
 */
export interface MemberJobQueryAllJobPageRequest {
  keywords?: string
  /**
   * OPEN_LISTINGS、OPEN_BIDS、ACTIVE_DELIVERIES、COMPLETED
   */
  type: string
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [Paging query all job list↗](http://192.168.2.9:3000/project/16/interface/api/11275) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/16/interface/api/cat_684)
 * @请求头 `POST /member/job/queryAllJobPage`
 * @更新时间 `2024-11-25 11:37:25`
 */
export interface MemberJobQueryAllJobPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    uid?: string
    descriptiveTitle?: string
    pickupLocation?: string
    pickupCity?: string
    pickupArea?: string
    pickupAddressName?: string
    pickupLongitude?: string
    pickupLatitude?: string
    dropOffLocation?: string
    dropOffCity?: string
    dropOffArea?: string
    dropOffAddressName?: string
    dropOffLongitude?: string
    dropOffLatitude?: string
    estimatedPrice?: number
    memberPayAmount?: number
    photoOfItemList?: string[]
    /**
     * 1:yes,0:no
     */
    isExpressListing?: string
    /**
     * 1=activate 0=deactivate
     */
    activate?: string
    tipOrBonus?: number
    displayAmount?: number
    status?: string
    amountTitle?: string
  }[]
}

/**
 * 接口 [Paging job bid list↗](http://192.168.2.9:3000/project/16/interface/api/4742) 的 **请求类型**
 *
 * @分类 [job bid↗](http://192.168.2.9:3000/project/16/interface/api/cat_689)
 * @请求头 `POST /member/jobBid/queryPage`
 * @更新时间 `2024-11-23 14:27:21`
 */
export interface MemberJobBidQueryPageRequest {
  jobUid: string
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [Paging job bid list↗](http://192.168.2.9:3000/project/16/interface/api/4742) 的 **返回类型**
 *
 * @分类 [job bid↗](http://192.168.2.9:3000/project/16/interface/api/cat_689)
 * @请求头 `POST /member/jobBid/queryPage`
 * @更新时间 `2024-11-23 14:27:21`
 */
export interface MemberJobBidQueryPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    uid?: string
    jobUid?: string
    driverId?: string
    driverName?: string
    driverProfileImg?: string
    vehicleName?: string
    vehicleType?: string
    driverBidAmount?: number
    totalAmount?: number
    totalDeliveryCost?: number
    deliveryDate?: string
    deliveryTime?: string
    avgScore?: number
    /**
     * 1:yes 0:no
     */
    isAccept?: string
  }[]
}

/**
 * 接口 [accept bid↗](http://192.168.2.9:3000/project/16/interface/api/4749) 的 **请求类型**
 *
 * @分类 [job bid↗](http://192.168.2.9:3000/project/16/interface/api/cat_689)
 * @请求头 `POST /member/jobBid/accept`
 * @更新时间 `2024-11-23 14:27:22`
 */
export interface MemberJobBidAcceptRequest {
  uid: string
}

/**
 * 接口 [accept bid↗](http://192.168.2.9:3000/project/16/interface/api/4749) 的 **返回类型**
 *
 * @分类 [job bid↗](http://192.168.2.9:3000/project/16/interface/api/cat_689)
 * @请求头 `POST /member/jobBid/accept`
 * @更新时间 `2024-11-23 14:27:22`
 */
export interface MemberJobBidAcceptResponse {}

/**
 * 接口 [bid detail↗](http://192.168.2.9:3000/project/16/interface/api/10413) 的 **请求类型**
 *
 * @分类 [job bid↗](http://192.168.2.9:3000/project/16/interface/api/cat_689)
 * @请求头 `GET /member/jobBid/detail`
 * @更新时间 `2024-11-23 14:27:22`
 */
export interface MemberJobBidDetailRequest {
  uid?: string
}

/**
 * 接口 [bid detail↗](http://192.168.2.9:3000/project/16/interface/api/10413) 的 **返回类型**
 *
 * @分类 [job bid↗](http://192.168.2.9:3000/project/16/interface/api/cat_689)
 * @请求头 `GET /member/jobBid/detail`
 * @更新时间 `2024-11-23 14:27:22`
 */
export interface MemberJobBidDetailResponse {
  uid?: string
  jobUid?: string
  driverId?: string
  driverName?: string
  driverProfileImg?: string
  cellPhone?: string
  descriptiveTitle?: string
  totalAmount?: number
  driverBidAmount?: number
  serviceFee?: number
  peerHaulFee?: number
  carImageList?: string[]
  carName?: string
  carType?: string
  deliveredCount?: number
  avgScore?: number
  reviewCount?: number
  deliveryDate?: string
  deliveryTime?: string
  extraNotes?: string
}

/**
 * 接口 [Get parcel size list↗](http://192.168.2.9:3000/project/16/interface/api/4791) 的 **请求类型**
 *
 * @分类 [parcel size↗](http://192.168.2.9:3000/project/16/interface/api/cat_699)
 * @请求头 `GET /member/parcelSize/getParcelSizeList`
 * @更新时间 `2023-11-14 11:26:10`
 */
export interface MemberParcelSizeGetParcelSizeListRequest {}

/**
 * 接口 [Get parcel size list↗](http://192.168.2.9:3000/project/16/interface/api/4791) 的 **返回类型**
 *
 * @分类 [parcel size↗](http://192.168.2.9:3000/project/16/interface/api/cat_699)
 * @请求头 `GET /member/parcelSize/getParcelSizeList`
 * @更新时间 `2023-11-14 11:26:10`
 */
export type MemberParcelSizeGetParcelSizeListResponse = {
  sizeCode?: string
  sizeDesc?: string
}[]

/**
 * 接口 [Paging transaction history↗](http://192.168.2.9:3000/project/16/interface/api/4819) 的 **请求类型**
 *
 * @分类 [transaction history↗](http://192.168.2.9:3000/project/16/interface/api/cat_709)
 * @请求头 `POST /member/jobOrder/queryPage`
 * @更新时间 `2024-11-23 14:27:28`
 */
export interface MemberJobOrderQueryPageRequest {
  startYear?: number
  endYear?: number
  startDate?: string
  endDate?: string
  /**
   * XLS/PDF
   */
  fileType?: string
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [Paging transaction history↗](http://192.168.2.9:3000/project/16/interface/api/4819) 的 **返回类型**
 *
 * @分类 [transaction history↗](http://192.168.2.9:3000/project/16/interface/api/cat_709)
 * @请求头 `POST /member/jobOrder/queryPage`
 * @更新时间 `2024-11-23 14:27:28`
 */
export interface MemberJobOrderQueryPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    orderId?: string
    driverId?: string
    driverName?: string
    driverProfileImage?: string
    amount?: number
    paymentMethod?: string
    payTime?: string
  }[]
}

/**
 * 接口 [export transaction history↗](http://192.168.2.9:3000/project/16/interface/api/4826) 的 **请求类型**
 *
 * @分类 [transaction history↗](http://192.168.2.9:3000/project/16/interface/api/cat_709)
 * @请求头 `POST /member/jobOrder/export`
 * @更新时间 `2024-11-23 14:27:28`
 */
export interface MemberJobOrderExportRequest {
  startYear?: number
  endYear?: number
  startDate?: string
  endDate?: string
  /**
   * XLS/PDF
   */
  fileType?: string
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [export transaction history↗](http://192.168.2.9:3000/project/16/interface/api/4826) 的 **返回类型**
 *
 * @分类 [transaction history↗](http://192.168.2.9:3000/project/16/interface/api/cat_709)
 * @请求头 `POST /member/jobOrder/export`
 * @更新时间 `2024-11-23 14:27:28`
 */
export interface MemberJobOrderExportResponse {}

/**
 * 接口 [Paging transaction history by PC↗](http://192.168.2.9:3000/project/16/interface/api/7171) 的 **请求类型**
 *
 * @分类 [transaction history↗](http://192.168.2.9:3000/project/16/interface/api/cat_709)
 * @请求头 `POST /member/jobOrder/pc/queryPage`
 * @更新时间 `2024-11-23 14:27:28`
 */
export interface MemberJobOrderPcQueryPageRequest {
  startYear?: number
  endYear?: number
  startDate?: string
  endDate?: string
  /**
   * XLS/PDF
   */
  fileType?: string
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [Paging transaction history by PC↗](http://192.168.2.9:3000/project/16/interface/api/7171) 的 **返回类型**
 *
 * @分类 [transaction history↗](http://192.168.2.9:3000/project/16/interface/api/cat_709)
 * @请求头 `POST /member/jobOrder/pc/queryPage`
 * @更新时间 `2024-11-23 14:27:28`
 */
export interface MemberJobOrderPcQueryPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    jobUid?: string
    photo?: string
    descriptiveTitle?: string
    pickupLocation?: string
    dropOffLocation?: string
    totalAmount?: number
    pickupTime?: string
    deliverTime?: string
  }[]
}

/**
 * 接口 [export transaction history by PC↗](http://192.168.2.9:3000/project/16/interface/api/7178) 的 **请求类型**
 *
 * @分类 [transaction history↗](http://192.168.2.9:3000/project/16/interface/api/cat_709)
 * @请求头 `POST /member/jobOrder/pc/export`
 * @更新时间 `2024-11-23 14:27:29`
 */
export interface MemberJobOrderPcExportRequest {
  startYear?: number
  endYear?: number
  startDate?: string
  endDate?: string
  /**
   * XLS/PDF
   */
  fileType?: string
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [export transaction history by PC↗](http://192.168.2.9:3000/project/16/interface/api/7178) 的 **返回类型**
 *
 * @分类 [transaction history↗](http://192.168.2.9:3000/project/16/interface/api/cat_709)
 * @请求头 `POST /member/jobOrder/pc/export`
 * @更新时间 `2024-11-23 14:27:29`
 */
export interface MemberJobOrderPcExportResponse {}

/**
 * 接口 [Pay the order↗](http://192.168.2.9:3000/project/16/interface/api/10101) 的 **请求类型**
 *
 * @分类 [transaction history↗](http://192.168.2.9:3000/project/16/interface/api/cat_709)
 * @请求头 `POST /member/jobOrder/pay`
 * @更新时间 `2024-11-23 14:27:29`
 */
export interface MemberJobOrderPayRequest {
  /**
   * @NotBlank(message = "orderNo is Required")
   */
  orderNo?: string
  jobUid?: string
}

/**
 * 接口 [Pay the order↗](http://192.168.2.9:3000/project/16/interface/api/10101) 的 **返回类型**
 *
 * @分类 [transaction history↗](http://192.168.2.9:3000/project/16/interface/api/cat_709)
 * @请求头 `POST /member/jobOrder/pay`
 * @更新时间 `2024-11-23 14:27:29`
 */
export interface MemberJobOrderPayResponse {
  payUrl?: string
}

/**
 * 接口 [Pay the order in app↗](http://192.168.2.9:3000/project/16/interface/api/10881) 的 **请求类型**
 *
 * @分类 [transaction history↗](http://192.168.2.9:3000/project/16/interface/api/cat_709)
 * @请求头 `POST /member/jobOrder/appPay`
 * @更新时间 `2024-11-23 14:27:30`
 */
export interface MemberJobOrderAppPayRequest {
  jobUid: string
  /**
   * @NotBlank(message = "paymentMethodId required")
   */
  paymentMethodId?: string
  cardUid?: string
}

/**
 * 接口 [Pay the order in app↗](http://192.168.2.9:3000/project/16/interface/api/10881) 的 **返回类型**
 *
 * @分类 [transaction history↗](http://192.168.2.9:3000/project/16/interface/api/cat_709)
 * @请求头 `POST /member/jobOrder/appPay`
 * @更新时间 `2024-11-23 14:27:30`
 */
export interface MemberJobOrderAppPayResponse {
  paymentIntentId?: string
  paymentMethodId?: string
  clientSecret?: string
}

/**
 * 接口 [Send chat message↗](http://192.168.2.9:3000/project/16/interface/api/5204) 的 **请求类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/16/interface/api/cat_759)
 * @请求头 `POST /member/chat/sendMessage`
 * @更新时间 `2024-05-13 14:43:28`
 */
export interface MemberChatSendMessageRequest {
  chatUid?: string
  driverId?: string
  content: string
  contentType?: string
}

/**
 * 接口 [Send chat message↗](http://192.168.2.9:3000/project/16/interface/api/5204) 的 **返回类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/16/interface/api/cat_759)
 * @请求头 `POST /member/chat/sendMessage`
 * @更新时间 `2024-05-13 14:43:28`
 */
export interface MemberChatSendMessageResponse {}

/**
 * 接口 [Paging talk list↗](http://192.168.2.9:3000/project/16/interface/api/5211) 的 **请求类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/16/interface/api/cat_759)
 * @请求头 `POST /member/chat/queryPage`
 * @更新时间 `2024-05-13 14:43:28`
 */
export interface MemberChatQueryPageRequest {
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [Paging talk list↗](http://192.168.2.9:3000/project/16/interface/api/5211) 的 **返回类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/16/interface/api/cat_759)
 * @请求头 `POST /member/chat/queryPage`
 * @更新时间 `2024-05-13 14:43:28`
 */
export interface MemberChatQueryPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    uid?: string
    memberId?: string
    driverId?: string
    driverName?: string
    driverProfileImg?: string
    driverPhone?: string
    jobUid?: string
    jobTitle?: string
    unReadCount?: number
    content?: string
    sendTime?: string
    sendTimeCN?: string
  }[]
}

/**
 * 接口 [Paging message list↗](http://192.168.2.9:3000/project/16/interface/api/5218) 的 **请求类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/16/interface/api/cat_759)
 * @请求头 `POST /member/chat/queryMessagePage`
 * @更新时间 `2024-05-13 14:43:28`
 */
export interface MemberChatQueryMessagePageRequest {
  chatUid?: string
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [Paging message list↗](http://192.168.2.9:3000/project/16/interface/api/5218) 的 **返回类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/16/interface/api/cat_759)
 * @请求头 `POST /member/chat/queryMessagePage`
 * @更新时间 `2024-05-13 14:43:28`
 */
export interface MemberChatQueryMessagePageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    uid?: string
    chatUid?: string
    jobUid?: string
    type?: string
    senderId?: string
    senderName?: string
    senderProfileImg?: string
    receiverId?: string
    receiverName?: string
    receiverProfileImg?: string
    content?: string
    contentType?: string
    isOwn?: string
    createTime?: string
    /**
     * 1:yes 0:no
     */
    isRead?: string
  }[]
}

/**
 * 接口 [send FCM↗](http://192.168.2.9:3000/project/16/interface/api/10191) 的 **请求类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/16/interface/api/cat_759)
 * @请求头 `GET /member/chat/sendFCM`
 * @更新时间 `2024-05-13 14:43:29`
 */
export interface MemberChatSendFcmRequest {
  token?: string
  content?: string
}

/**
 * 接口 [send FCM↗](http://192.168.2.9:3000/project/16/interface/api/10191) 的 **返回类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/16/interface/api/cat_759)
 * @请求头 `GET /member/chat/sendFCM`
 * @更新时间 `2024-05-13 14:43:29`
 */
export interface MemberChatSendFcmResponse {}

/**
 * 接口 [delete chat↗](http://192.168.2.9:3000/project/16/interface/api/10743) 的 **请求类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/16/interface/api/cat_759)
 * @请求头 `POST /member/chat/delete`
 * @更新时间 `2024-05-13 14:43:29`
 */
export interface MemberChatDeleteRequest {
  uid: string
}

/**
 * 接口 [delete chat↗](http://192.168.2.9:3000/project/16/interface/api/10743) 的 **返回类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/16/interface/api/cat_759)
 * @请求头 `POST /member/chat/delete`
 * @更新时间 `2024-05-13 14:43:29`
 */
export interface MemberChatDeleteResponse {}

/**
 * 接口 [read message↗](http://192.168.2.9:3000/project/16/interface/api/10975) 的 **请求类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/16/interface/api/cat_759)
 * @请求头 `POST /member/chat/readMessage`
 * @更新时间 `2024-05-13 14:43:29`
 */
export interface MemberChatReadMessageRequest {
  messageUidList?: string[]
}

/**
 * 接口 [read message↗](http://192.168.2.9:3000/project/16/interface/api/10975) 的 **返回类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/16/interface/api/cat_759)
 * @请求头 `POST /member/chat/readMessage`
 * @更新时间 `2024-05-13 14:43:29`
 */
export interface MemberChatReadMessageResponse {}

/**
 * 接口 [init chat↗](http://192.168.2.9:3000/project/16/interface/api/11001) 的 **请求类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/16/interface/api/cat_759)
 * @请求头 `POST /member/chat/initChat`
 * @更新时间 `2024-05-13 14:43:30`
 */
export interface MemberChatInitChatRequest {
  driverId: string
  jobUid: string
}

/**
 * 接口 [init chat↗](http://192.168.2.9:3000/project/16/interface/api/11001) 的 **返回类型**
 *
 * @分类 [chat↗](http://192.168.2.9:3000/project/16/interface/api/cat_759)
 * @请求头 `POST /member/chat/initChat`
 * @更新时间 `2024-05-13 14:43:30`
 */
export interface MemberChatInitChatResponse {
  chatUid?: string
}

/**
 * 接口 [driver detail info↗](http://192.168.2.9:3000/project/16/interface/api/5246) 的 **请求类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/16/interface/api/cat_774)
 * @请求头 `GET /member/driver/detail`
 * @更新时间 `2023-11-15 16:01:19`
 */
export interface MemberDriverDetailRequest {
  driverId?: string
}

/**
 * 接口 [driver detail info↗](http://192.168.2.9:3000/project/16/interface/api/5246) 的 **返回类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/16/interface/api/cat_774)
 * @请求头 `GET /member/driver/detail`
 * @更新时间 `2023-11-15 16:01:19`
 */
export interface MemberDriverDetailResponse {
  driverId?: string
  fullName?: string
  profileImg?: string
  carImageList?: string[]
  carName?: string
  carType?: string
  deliveredCount?: number
  avgScore?: number
  reviewCount?: number
  sinceYear?: number
}

/**
 * 接口 [Paging review list for driver↗](http://192.168.2.9:3000/project/16/interface/api/5253) 的 **请求类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/16/interface/api/cat_774)
 * @请求头 `POST /member/driver/queryPage`
 * @更新时间 `2023-11-15 16:01:19`
 */
export interface MemberDriverQueryPageRequest {
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
  /**
   * 1:yes 0:no
   */
  isShowLowStars?: string
  driverId: string
}

/**
 * 接口 [Paging review list for driver↗](http://192.168.2.9:3000/project/16/interface/api/5253) 的 **返回类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/16/interface/api/cat_774)
 * @请求头 `POST /member/driver/queryPage`
 * @更新时间 `2023-11-15 16:01:19`
 */
export interface MemberDriverQueryPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    uid?: string
    memberId?: string
    score?: number
    desc?: string
    memberAvatar?: string
    memberName?: string
    createTime?: string
    evaluateDesc?: string
  }[]
}

/**
 * 接口 [card list↗](http://192.168.2.9:3000/project/16/interface/api/5281) 的 **请求类型**
 *
 * @分类 [user card↗](http://192.168.2.9:3000/project/16/interface/api/cat_784)
 * @请求头 `POST /member/card/queryPage`
 * @更新时间 `2023-12-13 17:55:10`
 */
export interface MemberCardQueryPageRequest {}

/**
 * 接口 [card list↗](http://192.168.2.9:3000/project/16/interface/api/5281) 的 **返回类型**
 *
 * @分类 [user card↗](http://192.168.2.9:3000/project/16/interface/api/cat_784)
 * @请求头 `POST /member/card/queryPage`
 * @更新时间 `2023-12-13 17:55:10`
 */
export type MemberCardQueryPageResponse = {
  uid?: string
  cardNumber?: string
  expiryMonth?: number
  expiryYear?: number
  securityCode?: string
  firstName?: string
  lastName?: string
}[]

/**
 * 接口 [add card↗](http://192.168.2.9:3000/project/16/interface/api/5288) 的 **请求类型**
 *
 * @分类 [user card↗](http://192.168.2.9:3000/project/16/interface/api/cat_784)
 * @请求头 `POST /member/card/add`
 * @更新时间 `2023-11-15 17:53:02`
 */
export interface MemberCardAddRequest {
  cardNumber: string
  expiryMonth: number
  expiryYear: number
  securityCode: string
  firstName: string
  lastName: string
}

/**
 * 接口 [add card↗](http://192.168.2.9:3000/project/16/interface/api/5288) 的 **返回类型**
 *
 * @分类 [user card↗](http://192.168.2.9:3000/project/16/interface/api/cat_784)
 * @请求头 `POST /member/card/add`
 * @更新时间 `2023-11-15 17:53:02`
 */
export interface MemberCardAddResponse {}

/**
 * 接口 [delete card↗](http://192.168.2.9:3000/project/16/interface/api/5295) 的 **请求类型**
 *
 * @分类 [user card↗](http://192.168.2.9:3000/project/16/interface/api/cat_784)
 * @请求头 `POST /member/card/delete`
 * @更新时间 `2023-11-15 17:53:02`
 */
export interface MemberCardDeleteRequest {
  uid: string
}

/**
 * 接口 [delete card↗](http://192.168.2.9:3000/project/16/interface/api/5295) 的 **返回类型**
 *
 * @分类 [user card↗](http://192.168.2.9:3000/project/16/interface/api/cat_784)
 * @请求头 `POST /member/card/delete`
 * @更新时间 `2023-11-15 17:53:02`
 */
export interface MemberCardDeleteResponse {}

/**
 * 接口 [send invite email↗](http://192.168.2.9:3000/project/16/interface/api/5421) 的 **请求类型**
 *
 * @分类 [invite friend↗](http://192.168.2.9:3000/project/16/interface/api/cat_834)
 * @请求头 `POST /member/inviteFriend/sendEmail`
 * @更新时间 `2023-11-16 13:55:23`
 */
export interface MemberInviteFriendSendEmailRequest {
  email: string
  content?: string
}

/**
 * 接口 [send invite email↗](http://192.168.2.9:3000/project/16/interface/api/5421) 的 **返回类型**
 *
 * @分类 [invite friend↗](http://192.168.2.9:3000/project/16/interface/api/cat_834)
 * @请求头 `POST /member/inviteFriend/sendEmail`
 * @更新时间 `2023-11-16 13:55:23`
 */
export interface MemberInviteFriendSendEmailResponse {}

/**
 * 接口 [query_page↗](http://192.168.2.9:3000/project/18/interface/api/9921) 的 **请求类型**
 *
 * @分类 [Peerhaul_fee↗](http://192.168.2.9:3000/project/18/interface/api/cat_1546)
 * @请求头 `POST /admin/feeSetting/queryPage`
 * @更新时间 `2024-02-21 20:49:52`
 */
export interface AdminFeeSettingQueryPageRequest {
  /**
   * keywords
   */
  keywords?: string
  /**
   * sort
   */
  sort?: {
    /**
     * sort field
     */
    field?: string
    /**
     * sort type :  asc,desc
     */
    sortType?: string
  }
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [query_page↗](http://192.168.2.9:3000/project/18/interface/api/9921) 的 **返回类型**
 *
 * @分类 [Peerhaul_fee↗](http://192.168.2.9:3000/project/18/interface/api/cat_1546)
 * @请求头 `POST /admin/feeSetting/queryPage`
 * @更新时间 `2024-02-21 20:49:52`
 */
export interface AdminFeeSettingQueryPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    /**
     * uid
     */
    uid?: string
    /**
     * type
     */
    type?: string
    /**
     * 1:yes,0:no
     */
    isLongDistance?: string
    /**
     * service fee
     */
    serviceFee?: number
    /**
     * pickup fee
     */
    pickFee?: number
    /**
     * Fees (Per HR)
     */
    hourlyRate?: number
    /**
     * Fees (Per KM)
     */
    perKmRate?: number
    /**
     * insurance rate
     */
    insuranceRate?: number
    /**
     * peerhaul charge
     */
    peerhaulCharge?: number
  }[]
}

/**
 * 接口 [save_fee↗](http://192.168.2.9:3000/project/18/interface/api/9927) 的 **请求类型**
 *
 * @分类 [Peerhaul_fee↗](http://192.168.2.9:3000/project/18/interface/api/cat_1546)
 * @请求头 `POST /admin/feeSetting/save`
 * @更新时间 `2024-02-21 20:49:53`
 */
export interface AdminFeeSettingSaveRequest {
  /**
   * uid
   */
  uid: string
  /**
   * type
   */
  type?: string
  /**
   * 1:yes,0:no
   */
  isLongDistance?: string
  /**
   * service fee
   */
  serviceFee?: number
  /**
   * pickup fee
   */
  pickFee?: number
  /**
   * Fees (Per HR)
   */
  hourlyRate?: number
  /**
   * Fees (Per KM)
   */
  perKmRate?: number
  /**
   * insurance rate
   */
  insuranceRate?: number
  /**
   * peerhaul charge
   */
  peerhaulCharge?: number
}

/**
 * 接口 [save_fee↗](http://192.168.2.9:3000/project/18/interface/api/9927) 的 **返回类型**
 *
 * @分类 [Peerhaul_fee↗](http://192.168.2.9:3000/project/18/interface/api/cat_1546)
 * @请求头 `POST /admin/feeSetting/save`
 * @更新时间 `2024-02-21 20:49:53`
 */
export interface AdminFeeSettingSaveResponse {}

/**
 * 接口 [Paging transaction history↗](http://192.168.2.9:3000/project/18/interface/api/10143) 的 **请求类型**
 *
 * @分类 [job order↗](http://192.168.2.9:3000/project/18/interface/api/cat_1588)
 * @请求头 `POST /admin/jobOrder/queryPage`
 * @更新时间 `2024-03-01 10:31:29`
 */
export interface AdminJobOrderQueryPageRequest {
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
  keyword?: string
}

/**
 * 接口 [Paging transaction history↗](http://192.168.2.9:3000/project/18/interface/api/10143) 的 **返回类型**
 *
 * @分类 [job order↗](http://192.168.2.9:3000/project/18/interface/api/cat_1588)
 * @请求头 `POST /admin/jobOrder/queryPage`
 * @更新时间 `2024-03-01 10:31:29`
 */
export interface AdminJobOrderQueryPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    driverName?: string
    paidAmount?: number
    transactionId?: string
    status?: string
    dateTime?: string
  }[]
}

/**
 * 接口 [Paging stripe transaction list↗](http://192.168.2.9:3000/project/18/interface/api/10149) 的 **请求类型**
 *
 * @分类 [job order↗](http://192.168.2.9:3000/project/18/interface/api/cat_1588)
 * @请求头 `POST /admin/jobOrder/stripeQueryPage`
 * @更新时间 `2024-03-01 10:31:30`
 */
export interface AdminJobOrderStripeQueryPageRequest {
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
  keyword?: string
}

/**
 * 接口 [Paging stripe transaction list↗](http://192.168.2.9:3000/project/18/interface/api/10149) 的 **返回类型**
 *
 * @分类 [job order↗](http://192.168.2.9:3000/project/18/interface/api/cat_1588)
 * @请求头 `POST /admin/jobOrder/stripeQueryPage`
 * @更新时间 `2024-03-01 10:31:30`
 */
export interface AdminJobOrderStripeQueryPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    customer?: string
    driver?: string
    jobTitle?: string
    amount?: number
    email?: string
    cardHolderName?: string
    stripeCustomerId?: string
  }[]
}

/**
 * 接口 [save↗](http://192.168.2.9:3000/project/18/interface/api/10979) 的 **请求类型**
 *
 * @分类 [large disclaimer↗](http://192.168.2.9:3000/project/18/interface/api/cat_1898)
 * @请求头 `POST /admin/largeDisclaimer/save`
 * @更新时间 `2024-05-08 22:34:08`
 */
export interface AdminLargeDisclaimerSaveRequest {
  content?: string
}

/**
 * 接口 [save↗](http://192.168.2.9:3000/project/18/interface/api/10979) 的 **返回类型**
 *
 * @分类 [large disclaimer↗](http://192.168.2.9:3000/project/18/interface/api/cat_1898)
 * @请求头 `POST /admin/largeDisclaimer/save`
 * @更新时间 `2024-05-08 22:34:08`
 */
export interface AdminLargeDisclaimerSaveResponse {}

/**
 * 接口 [get↗](http://192.168.2.9:3000/project/18/interface/api/10981) 的 **请求类型**
 *
 * @分类 [large disclaimer↗](http://192.168.2.9:3000/project/18/interface/api/cat_1898)
 * @请求头 `GET /admin/largeDisclaimer/get`
 * @更新时间 `2024-05-08 22:34:09`
 */
export interface AdminLargeDisclaimerGetRequest {}

/**
 * 接口 [get↗](http://192.168.2.9:3000/project/18/interface/api/10981) 的 **返回类型**
 *
 * @分类 [large disclaimer↗](http://192.168.2.9:3000/project/18/interface/api/cat_1898)
 * @请求头 `GET /admin/largeDisclaimer/get`
 * @更新时间 `2024-05-08 22:34:09`
 */
export interface AdminLargeDisclaimerGetResponse {
  uid?: string
  content?: string
  createTime?: string
  updateTime?: string
}

/**
 * 接口 [save↗](http://192.168.2.9:3000/project/18/interface/api/11039) 的 **请求类型**
 *
 * @分类 [packing guidance↗](http://192.168.2.9:3000/project/18/interface/api/cat_1943)
 * @请求头 `POST /admin/packagingGuidance/save`
 * @更新时间 `2024-05-11 15:10:54`
 */
export interface AdminPackagingGuidanceSaveRequest {
  content?: string
}

/**
 * 接口 [save↗](http://192.168.2.9:3000/project/18/interface/api/11039) 的 **返回类型**
 *
 * @分类 [packing guidance↗](http://192.168.2.9:3000/project/18/interface/api/cat_1943)
 * @请求头 `POST /admin/packagingGuidance/save`
 * @更新时间 `2024-05-11 15:10:54`
 */
export interface AdminPackagingGuidanceSaveResponse {}

/**
 * 接口 [get↗](http://192.168.2.9:3000/project/18/interface/api/11041) 的 **请求类型**
 *
 * @分类 [packing guidance↗](http://192.168.2.9:3000/project/18/interface/api/cat_1943)
 * @请求头 `GET /admin/packagingGuidance/get`
 * @更新时间 `2024-05-11 15:10:55`
 */
export interface AdminPackagingGuidanceGetRequest {}

/**
 * 接口 [get↗](http://192.168.2.9:3000/project/18/interface/api/11041) 的 **返回类型**
 *
 * @分类 [packing guidance↗](http://192.168.2.9:3000/project/18/interface/api/cat_1943)
 * @请求头 `GET /admin/packagingGuidance/get`
 * @更新时间 `2024-05-11 15:10:55`
 */
export interface AdminPackagingGuidanceGetResponse {
  uid?: string
  content?: string
  createTime?: string
  updateTime?: string
}

/**
 * 接口 [save↗](http://192.168.2.9:3000/project/18/interface/api/11435) 的 **请求类型**
 *
 * @分类 [shopping insurance↗](http://192.168.2.9:3000/project/18/interface/api/cat_1952)
 * @请求头 `POST /admin/shippingInsurance/save`
 * @更新时间 `2024-06-29 20:42:25`
 */
export interface AdminShippingInsuranceSaveRequest {
  content?: string
}

/**
 * 接口 [save↗](http://192.168.2.9:3000/project/18/interface/api/11435) 的 **返回类型**
 *
 * @分类 [shopping insurance↗](http://192.168.2.9:3000/project/18/interface/api/cat_1952)
 * @请求头 `POST /admin/shippingInsurance/save`
 * @更新时间 `2024-06-29 20:42:25`
 */
export interface AdminShippingInsuranceSaveResponse {}

/**
 * 接口 [get↗](http://192.168.2.9:3000/project/18/interface/api/11437) 的 **请求类型**
 *
 * @分类 [shopping insurance↗](http://192.168.2.9:3000/project/18/interface/api/cat_1952)
 * @请求头 `GET /admin/shippingInsurance/get`
 * @更新时间 `2024-06-29 20:42:25`
 */
export interface AdminShippingInsuranceGetRequest {}

/**
 * 接口 [get↗](http://192.168.2.9:3000/project/18/interface/api/11437) 的 **返回类型**
 *
 * @分类 [shopping insurance↗](http://192.168.2.9:3000/project/18/interface/api/cat_1952)
 * @请求头 `GET /admin/shippingInsurance/get`
 * @更新时间 `2024-06-29 20:42:25`
 */
export interface AdminShippingInsuranceGetResponse {
  uid?: string
  content?: string
  createTime?: string
  updateTime?: string
}

/**
 * 接口 [save↗](http://192.168.2.9:3000/project/18/interface/api/11153) 的 **请求类型**
 *
 * @分类 [privacyPolicy↗](http://192.168.2.9:3000/project/18/interface/api/cat_2123)
 * @请求头 `POST /admin/privacyPolicy/save`
 * @更新时间 `2024-05-17 22:14:55`
 */
export interface AdminPrivacyPolicySaveRequest {
  content?: string
}

/**
 * 接口 [save↗](http://192.168.2.9:3000/project/18/interface/api/11153) 的 **返回类型**
 *
 * @分类 [privacyPolicy↗](http://192.168.2.9:3000/project/18/interface/api/cat_2123)
 * @请求头 `POST /admin/privacyPolicy/save`
 * @更新时间 `2024-05-17 22:14:55`
 */
export interface AdminPrivacyPolicySaveResponse {}

/**
 * 接口 [get↗](http://192.168.2.9:3000/project/18/interface/api/11155) 的 **请求类型**
 *
 * @分类 [privacyPolicy↗](http://192.168.2.9:3000/project/18/interface/api/cat_2123)
 * @请求头 `GET /admin/privacyPolicy/get`
 * @更新时间 `2024-05-17 22:14:56`
 */
export interface AdminPrivacyPolicyGetRequest {}

/**
 * 接口 [get↗](http://192.168.2.9:3000/project/18/interface/api/11155) 的 **返回类型**
 *
 * @分类 [privacyPolicy↗](http://192.168.2.9:3000/project/18/interface/api/cat_2123)
 * @请求头 `GET /admin/privacyPolicy/get`
 * @更新时间 `2024-05-17 22:14:56`
 */
export interface AdminPrivacyPolicyGetResponse {
  uid?: string
  content?: string
  createTime?: string
  updateTime?: string
}

/**
 * 接口 [save↗](http://192.168.2.9:3000/project/18/interface/api/11431) 的 **请求类型**
 *
 * @分类 [liability_insurance↗](http://192.168.2.9:3000/project/18/interface/api/cat_2555)
 * @请求头 `POST /admin/liabilityInsurance/save`
 * @更新时间 `2024-06-29 20:16:20`
 */
export interface AdminLiabilityInsuranceSaveRequest {
  content?: string
}

/**
 * 接口 [save↗](http://192.168.2.9:3000/project/18/interface/api/11431) 的 **返回类型**
 *
 * @分类 [liability_insurance↗](http://192.168.2.9:3000/project/18/interface/api/cat_2555)
 * @请求头 `POST /admin/liabilityInsurance/save`
 * @更新时间 `2024-06-29 20:16:20`
 */
export interface AdminLiabilityInsuranceSaveResponse {}

/**
 * 接口 [get↗](http://192.168.2.9:3000/project/18/interface/api/11433) 的 **请求类型**
 *
 * @分类 [liability_insurance↗](http://192.168.2.9:3000/project/18/interface/api/cat_2555)
 * @请求头 `GET /admin/liabilityInsurance/get`
 * @更新时间 `2024-06-29 20:16:21`
 */
export interface AdminLiabilityInsuranceGetRequest {}

/**
 * 接口 [get↗](http://192.168.2.9:3000/project/18/interface/api/11433) 的 **返回类型**
 *
 * @分类 [liability_insurance↗](http://192.168.2.9:3000/project/18/interface/api/cat_2555)
 * @请求头 `GET /admin/liabilityInsurance/get`
 * @更新时间 `2024-06-29 20:16:21`
 */
export interface AdminLiabilityInsuranceGetResponse {
  uid?: string
  content?: string
  createTime?: string
  updateTime?: string
}

/**
 * 接口 [login↗](http://192.168.2.9:3000/project/18/interface/api/4364) 的 **请求类型**
 *
 * @分类 [admin_user↗](http://192.168.2.9:3000/project/18/interface/api/cat_629)
 * @请求头 `POST /admin/admin/login`
 * @更新时间 `2023-11-10 16:04:09`
 */
export interface AdminAdminLoginRequest {
  /**
   * username(email)
   */
  userName: string
  /**
   * password
   */
  password: string
}

/**
 * 接口 [login↗](http://192.168.2.9:3000/project/18/interface/api/4364) 的 **返回类型**
 *
 * @分类 [admin_user↗](http://192.168.2.9:3000/project/18/interface/api/cat_629)
 * @请求头 `POST /admin/admin/login`
 * @更新时间 `2023-11-10 16:04:09`
 */
export interface AdminAdminLoginResponse {
  /**
   * token
   */
  token?: string
  /**
   * expire seconds
   */
  expire?: string
  /**
   * user id
   */
  userId?: string
  /**
   * username
   */
  userName?: string
  /**
   * nickname
   */
  nickName?: string
  /**
   * avatar url
   */
  avatarUrl?: string
}

/**
 * 接口 [login_out↗](http://192.168.2.9:3000/project/18/interface/api/4371) 的 **请求类型**
 *
 * @分类 [admin_user↗](http://192.168.2.9:3000/project/18/interface/api/cat_629)
 * @请求头 `POST /admin/admin/logout`
 * @更新时间 `2023-11-10 16:04:09`
 */
export interface AdminAdminLogoutRequest {}

/**
 * 接口 [login_out↗](http://192.168.2.9:3000/project/18/interface/api/4371) 的 **返回类型**
 *
 * @分类 [admin_user↗](http://192.168.2.9:3000/project/18/interface/api/cat_629)
 * @请求头 `POST /admin/admin/logout`
 * @更新时间 `2023-11-10 16:04:09`
 */
export interface AdminAdminLogoutResponse {}

/**
 * 接口 [save↗](http://192.168.2.9:3000/project/18/interface/api/4406) 的 **请求类型**
 *
 * @分类 [terms_and_condition↗](http://192.168.2.9:3000/project/18/interface/api/cat_639)
 * @请求头 `POST /admin/termsAndCondition/save`
 * @更新时间 `2023-11-10 16:04:15`
 */
export interface AdminTermsAndConditionSaveRequest {
  /**
   * info
   */
  info: string
  /**
   * privacy
   */
  privacy: string
}

/**
 * 接口 [save↗](http://192.168.2.9:3000/project/18/interface/api/4406) 的 **返回类型**
 *
 * @分类 [terms_and_condition↗](http://192.168.2.9:3000/project/18/interface/api/cat_639)
 * @请求头 `POST /admin/termsAndCondition/save`
 * @更新时间 `2023-11-10 16:04:15`
 */
export interface AdminTermsAndConditionSaveResponse {}

/**
 * 接口 [get_terms_and_condition↗](http://192.168.2.9:3000/project/18/interface/api/4413) 的 **请求类型**
 *
 * @分类 [terms_and_condition↗](http://192.168.2.9:3000/project/18/interface/api/cat_639)
 * @请求头 `GET /admin/termsAndCondition/get`
 * @更新时间 `2023-11-10 16:04:15`
 */
export interface AdminTermsAndConditionGetRequest {}

/**
 * 接口 [get_terms_and_condition↗](http://192.168.2.9:3000/project/18/interface/api/4413) 的 **返回类型**
 *
 * @分类 [terms_and_condition↗](http://192.168.2.9:3000/project/18/interface/api/cat_639)
 * @请求头 `GET /admin/termsAndCondition/get`
 * @更新时间 `2023-11-10 16:04:15`
 */
export interface AdminTermsAndConditionGetResponse {
  /**
   * uid primary key
   */
  uid?: string
  /**
   * info
   */
  info?: string
  /**
   * privacy
   */
  privacy?: string
}

/**
 * 接口 [add_faq↗](http://192.168.2.9:3000/project/18/interface/api/4588) 的 **请求类型**
 *
 * @分类 [faq↗](http://192.168.2.9:3000/project/18/interface/api/cat_659)
 * @请求头 `POST /admin/faq/add`
 * @更新时间 `2023-11-14 11:46:03`
 */
export interface AdminFaqAddRequest {
  /**
   * question
   */
  question: string
  /**
   * answer
   */
  answer: string
}

/**
 * 接口 [add_faq↗](http://192.168.2.9:3000/project/18/interface/api/4588) 的 **返回类型**
 *
 * @分类 [faq↗](http://192.168.2.9:3000/project/18/interface/api/cat_659)
 * @请求头 `POST /admin/faq/add`
 * @更新时间 `2023-11-14 11:46:03`
 */
export interface AdminFaqAddResponse {}

/**
 * 接口 [modify_faq↗](http://192.168.2.9:3000/project/18/interface/api/4595) 的 **请求类型**
 *
 * @分类 [faq↗](http://192.168.2.9:3000/project/18/interface/api/cat_659)
 * @请求头 `POST /admin/faq/modify`
 * @更新时间 `2023-11-14 11:46:03`
 */
export interface AdminFaqModifyRequest {
  /**
   * uid
   */
  uid: string
  /**
   * question
   */
  question: string
  /**
   * answer
   */
  answer: string
}

/**
 * 接口 [modify_faq↗](http://192.168.2.9:3000/project/18/interface/api/4595) 的 **返回类型**
 *
 * @分类 [faq↗](http://192.168.2.9:3000/project/18/interface/api/cat_659)
 * @请求头 `POST /admin/faq/modify`
 * @更新时间 `2023-11-14 11:46:03`
 */
export interface AdminFaqModifyResponse {}

/**
 * 接口 [remove_faq↗](http://192.168.2.9:3000/project/18/interface/api/4602) 的 **请求类型**
 *
 * @分类 [faq↗](http://192.168.2.9:3000/project/18/interface/api/cat_659)
 * @请求头 `POST /admin/faq/remove`
 * @更新时间 `2023-11-14 11:46:03`
 */
export interface AdminFaqRemoveRequest {
  /**
   * uid
   */
  uid: string
}

/**
 * 接口 [remove_faq↗](http://192.168.2.9:3000/project/18/interface/api/4602) 的 **返回类型**
 *
 * @分类 [faq↗](http://192.168.2.9:3000/project/18/interface/api/cat_659)
 * @请求头 `POST /admin/faq/remove`
 * @更新时间 `2023-11-14 11:46:03`
 */
export interface AdminFaqRemoveResponse {}

/**
 * 接口 [query_page↗](http://192.168.2.9:3000/project/18/interface/api/4609) 的 **请求类型**
 *
 * @分类 [faq↗](http://192.168.2.9:3000/project/18/interface/api/cat_659)
 * @请求头 `POST /admin/faq/queryPage`
 * @更新时间 `2023-11-14 11:46:03`
 */
export interface AdminFaqQueryPageRequest {
  /**
   * keywords
   */
  keywords?: string
  /**
   * sort
   */
  sort?: {
    /**
     * sort field
     */
    field?: string
    /**
     * sort type :  asc,desc
     */
    sortType?: string
  }
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [query_page↗](http://192.168.2.9:3000/project/18/interface/api/4609) 的 **返回类型**
 *
 * @分类 [faq↗](http://192.168.2.9:3000/project/18/interface/api/cat_659)
 * @请求头 `POST /admin/faq/queryPage`
 * @更新时间 `2023-11-14 11:46:03`
 */
export interface AdminFaqQueryPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    /**
     * id
     */
    id?: number
    /**
     * uid
     */
    uid?: string
    /**
     * question
     */
    question?: string
    /**
     * answer
     */
    answer?: string
  }[]
}

/**
 * 接口 [modify_faq↗](http://192.168.2.9:3000/project/18/interface/api/4805) 的 **请求类型**
 *
 * @分类 [popup_content↗](http://192.168.2.9:3000/project/18/interface/api/cat_704)
 * @请求头 `POST /admin/popupContent/modify`
 * @更新时间 `2023-11-14 11:45:56`
 */
export interface AdminPopupContentModifyRequest {
  /**
   * uid
   */
  uid?: string
  /**
   * title
   */
  title?: string
  /**
   * content
   */
  content?: string
}

/**
 * 接口 [modify_faq↗](http://192.168.2.9:3000/project/18/interface/api/4805) 的 **返回类型**
 *
 * @分类 [popup_content↗](http://192.168.2.9:3000/project/18/interface/api/cat_704)
 * @请求头 `POST /admin/popupContent/modify`
 * @更新时间 `2023-11-14 11:45:56`
 */
export interface AdminPopupContentModifyResponse {}

/**
 * 接口 [query_page↗](http://192.168.2.9:3000/project/18/interface/api/4812) 的 **请求类型**
 *
 * @分类 [popup_content↗](http://192.168.2.9:3000/project/18/interface/api/cat_704)
 * @请求头 `POST /admin/popupContent/queryPage`
 * @更新时间 `2023-11-14 11:45:56`
 */
export interface AdminPopupContentQueryPageRequest {
  /**
   * keywords
   */
  keywords?: string
  /**
   * sort
   */
  sort?: {
    /**
     * sort field
     */
    field?: string
    /**
     * sort type :  asc,desc
     */
    sortType?: string
  }
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [query_page↗](http://192.168.2.9:3000/project/18/interface/api/4812) 的 **返回类型**
 *
 * @分类 [popup_content↗](http://192.168.2.9:3000/project/18/interface/api/cat_704)
 * @请求头 `POST /admin/popupContent/queryPage`
 * @更新时间 `2023-11-14 11:45:56`
 */
export interface AdminPopupContentQueryPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    /**
     * id
     */
    id?: number
    /**
     * uid
     */
    uid?: string
    /**
     * title
     */
    title?: string
    /**
     * content
     */
    content?: string
  }[]
}

/**
 * 接口 [query page↗](http://192.168.2.9:3000/project/18/interface/api/5302) 的 **请求类型**
 *
 * @分类 [customer↗](http://192.168.2.9:3000/project/18/interface/api/cat_789)
 * @请求头 `POST /admin/member/queryPage`
 * @更新时间 `2023-11-15 18:16:53`
 */
export interface AdminMemberQueryPageRequest {
  /**
   * keywords
   */
  keywords?: string
  /**
   * sort
   */
  sort?: {
    /**
     * sort field
     */
    field?: string
    /**
     * sort type :  asc,desc
     */
    sortType?: string
  }
  /**
   * is block 1=yes, 0=no
   */
  isBlock?: string
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [query page↗](http://192.168.2.9:3000/project/18/interface/api/5302) 的 **返回类型**
 *
 * @分类 [customer↗](http://192.168.2.9:3000/project/18/interface/api/cat_789)
 * @请求头 `POST /admin/member/queryPage`
 * @更新时间 `2023-11-15 18:16:53`
 */
export interface AdminMemberQueryPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    /**
     * memberId
     */
    memberId?: string
    /**
     * username
     */
    userName?: string
    /**
     * full name
     */
    fullName?: string
    /**
     * profile img
     */
    profileImg?: string
    /**
     * email
     */
    email?: string
    /**
     * mobile phone
     */
    cellPhone?: string
    /**
     * create time
     */
    createTime?: string
    /**
     * is block  1=yes 0=no, default:0
     */
    isBlock?: string
    /**
     * description of is blocked
     */
    status?: string
  }[]
}

/**
 * 接口 [remove customer↗](http://192.168.2.9:3000/project/18/interface/api/5309) 的 **请求类型**
 *
 * @分类 [customer↗](http://192.168.2.9:3000/project/18/interface/api/cat_789)
 * @请求头 `POST /admin/member/remove`
 * @更新时间 `2023-11-15 18:16:54`
 */
export interface AdminMemberRemoveRequest {
  /**
   * uid
   */
  uid: string
}

/**
 * 接口 [remove customer↗](http://192.168.2.9:3000/project/18/interface/api/5309) 的 **返回类型**
 *
 * @分类 [customer↗](http://192.168.2.9:3000/project/18/interface/api/cat_789)
 * @请求头 `POST /admin/member/remove`
 * @更新时间 `2023-11-15 18:16:54`
 */
export interface AdminMemberRemoveResponse {}

/**
 * 接口 [update block↗](http://192.168.2.9:3000/project/18/interface/api/5316) 的 **请求类型**
 *
 * @分类 [customer↗](http://192.168.2.9:3000/project/18/interface/api/cat_789)
 * @请求头 `POST /admin/member/updateBlock`
 * @更新时间 `2023-11-15 18:16:54`
 */
export interface AdminMemberUpdateBlockRequest {
  /**
   * uid
   */
  uid: string
}

/**
 * 接口 [update block↗](http://192.168.2.9:3000/project/18/interface/api/5316) 的 **返回类型**
 *
 * @分类 [customer↗](http://192.168.2.9:3000/project/18/interface/api/cat_789)
 * @请求头 `POST /admin/member/updateBlock`
 * @更新时间 `2023-11-15 18:16:54`
 */
export interface AdminMemberUpdateBlockResponse {}

/**
 * 接口 [get detail↗](http://192.168.2.9:3000/project/18/interface/api/5323) 的 **请求类型**
 *
 * @分类 [customer↗](http://192.168.2.9:3000/project/18/interface/api/cat_789)
 * @请求头 `GET /admin/member/getDetail`
 * @更新时间 `2023-11-15 18:16:54`
 */
export interface AdminMemberGetDetailRequest {
  memberId: string
}

/**
 * 接口 [get detail↗](http://192.168.2.9:3000/project/18/interface/api/5323) 的 **返回类型**
 *
 * @分类 [customer↗](http://192.168.2.9:3000/project/18/interface/api/cat_789)
 * @请求头 `GET /admin/member/getDetail`
 * @更新时间 `2023-11-15 18:16:54`
 */
export interface AdminMemberGetDetailResponse {
  /**
   * memberId
   */
  memberId?: string
  /**
   * username
   */
  userName?: string
  /**
   * full name
   */
  fullName?: string
  /**
   * profile img
   */
  profileImg?: string
  /**
   * email
   */
  email?: string
  /**
   * mobile phone
   */
  cellPhone?: string
  /**
   * house no
   */
  houseNo?: string
  /**
   * address
   */
  address?: string
  /**
   * state
   */
  state?: string
  /**
   * city
   */
  city?: string
  /**
   * referral code
   */
  referralCode?: string
  /**
   * birthday
   */
  dateOfBirth?: string
  /**
   * create time
   */
  createTime?: string
  /**
   * is block  1=yes 0=no, default:0
   */
  isBlock?: string
  /**
   * description of is blocked
   */
  status?: string
}

/**
 * 接口 [get dashboard↗](http://192.168.2.9:3000/project/18/interface/api/5330) 的 **请求类型**
 *
 * @分类 [dashboard↗](http://192.168.2.9:3000/project/18/interface/api/cat_794)
 * @请求头 `GET /admin/dashboard/get`
 * @更新时间 `2023-11-15 18:03:00`
 */
export interface AdminDashboardGetRequest {}

/**
 * 接口 [get dashboard↗](http://192.168.2.9:3000/project/18/interface/api/5330) 的 **返回类型**
 *
 * @分类 [dashboard↗](http://192.168.2.9:3000/project/18/interface/api/cat_794)
 * @请求头 `GET /admin/dashboard/get`
 * @更新时间 `2023-11-15 18:03:00`
 */
export interface AdminDashboardGetResponse {
  /**
   * drivers count
   */
  driversCount?: number
  /**
   * customers count
   */
  customersCount?: number
  /**
   * active delivery count
   */
  activeDeliveryCount?: number
  /**
   * pending delivery count
   */
  pendingDeliveryCount?: number
}

/**
 * 接口 [query page↗](http://192.168.2.9:3000/project/18/interface/api/5337) 的 **请求类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/18/interface/api/cat_799)
 * @请求头 `POST /admin/driver/queryPage`
 * @更新时间 `2023-11-15 18:17:00`
 */
export interface AdminDriverQueryPageRequest {
  /**
   * keywords
   */
  keywords?: string
  /**
   * sort
   */
  sort?: {
    /**
     * sort field
     */
    field?: string
    /**
     * sort type :  asc,desc
     */
    sortType?: string
  }
  /**
   * is block 1=yes, 0=no
   */
  isBlock?: string
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [query page↗](http://192.168.2.9:3000/project/18/interface/api/5337) 的 **返回类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/18/interface/api/cat_799)
 * @请求头 `POST /admin/driver/queryPage`
 * @更新时间 `2023-11-15 18:17:00`
 */
export interface AdminDriverQueryPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    /**
     * driver id
     */
    driverId?: string
    /**
     * username
     */
    userName?: string
    /**
     * full name
     */
    fullName?: string
    /**
     * profile img
     */
    profileImg?: string
    /**
     * email
     */
    email?: string
    /**
     * mobile phone
     */
    cellPhone?: string
    /**
     * create time
     */
    createTime?: string
    /**
     * is block  1=yes 0=no, default:0
     */
    isBlock?: string
    /**
     * description of is blocked
     */
    status?: string
  }[]
}

/**
 * 接口 [remove driver↗](http://192.168.2.9:3000/project/18/interface/api/5344) 的 **请求类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/18/interface/api/cat_799)
 * @请求头 `POST /admin/driver/remove`
 * @更新时间 `2023-11-15 18:17:00`
 */
export interface AdminDriverRemoveRequest {
  /**
   * uid
   */
  uid: string
}

/**
 * 接口 [remove driver↗](http://192.168.2.9:3000/project/18/interface/api/5344) 的 **返回类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/18/interface/api/cat_799)
 * @请求头 `POST /admin/driver/remove`
 * @更新时间 `2023-11-15 18:17:00`
 */
export interface AdminDriverRemoveResponse {}

/**
 * 接口 [update block↗](http://192.168.2.9:3000/project/18/interface/api/5351) 的 **请求类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/18/interface/api/cat_799)
 * @请求头 `POST /admin/driver/updateBlock`
 * @更新时间 `2023-11-15 18:17:00`
 */
export interface AdminDriverUpdateBlockRequest {
  /**
   * uid
   */
  uid: string
}

/**
 * 接口 [update block↗](http://192.168.2.9:3000/project/18/interface/api/5351) 的 **返回类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/18/interface/api/cat_799)
 * @请求头 `POST /admin/driver/updateBlock`
 * @更新时间 `2023-11-15 18:17:00`
 */
export interface AdminDriverUpdateBlockResponse {}

/**
 * 接口 [get detail↗](http://192.168.2.9:3000/project/18/interface/api/5358) 的 **请求类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/18/interface/api/cat_799)
 * @请求头 `GET /admin/driver/getDetail`
 * @更新时间 `2023-11-15 18:17:00`
 */
export interface AdminDriverGetDetailRequest {
  driverId: string
}

/**
 * 接口 [get detail↗](http://192.168.2.9:3000/project/18/interface/api/5358) 的 **返回类型**
 *
 * @分类 [driver↗](http://192.168.2.9:3000/project/18/interface/api/cat_799)
 * @请求头 `GET /admin/driver/getDetail`
 * @更新时间 `2023-11-15 18:17:00`
 */
export interface AdminDriverGetDetailResponse {
  /**
   * driver id
   */
  driverId?: string
  /**
   * username
   */
  userName?: string
  /**
   * full name
   */
  fullName?: string
  /**
   * profile img
   */
  profileImg?: string
  /**
   * email
   */
  email?: string
  /**
   * mobile phone
   */
  cellPhone?: string
  /**
   * house no
   */
  houseNo?: string
  /**
   * address
   */
  address?: string
  /**
   * state
   */
  state?: string
  /**
   * city
   */
  city?: string
  /**
   * referral code
   */
  referralCode?: string
  /**
   * birthday
   */
  dateOfBirth?: string
  /**
   * create time
   */
  createTime?: string
  /**
   * is block  1=yes 0=no, default:0
   */
  isBlock?: string
  /**
   * description of is blocked
   */
  status?: string
}

/**
 * 接口 [query page↗](http://192.168.2.9:3000/project/18/interface/api/5365) 的 **请求类型**
 *
 * @分类 [job review↗](http://192.168.2.9:3000/project/18/interface/api/cat_804)
 * @请求头 `POST /admin/jobReview/queryPage`
 * @更新时间 `2023-11-15 20:19:48`
 */
export interface AdminJobReviewQueryPageRequest {
  /**
   * driver id
   */
  driverId?: string
  /**
   * keywords
   */
  keywords?: string
  /**
   * sort
   */
  sort?: {
    /**
     * sort field
     */
    field?: string
    /**
     * sort type :  asc,desc
     */
    sortType?: string
  }
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [query page↗](http://192.168.2.9:3000/project/18/interface/api/5365) 的 **返回类型**
 *
 * @分类 [job review↗](http://192.168.2.9:3000/project/18/interface/api/cat_804)
 * @请求头 `POST /admin/jobReview/queryPage`
 * @更新时间 `2023-11-15 20:19:48`
 */
export interface AdminJobReviewQueryPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    /**
     * uid
     */
    uid?: string
    /**
     * driver name
     */
    driverName?: string
    /**
     * customer name
     */
    customerName?: string
    /**
     * stars
     */
    score?: number
    /**
     * desc
     */
    desc?: string
    /**
     * create time
     */
    createTime?: string
  }[]
}

/**
 * 接口 [query page↗](http://192.168.2.9:3000/project/18/interface/api/5372) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/18/interface/api/cat_809)
 * @请求头 `POST /admin/job/queryPage`
 * @更新时间 `2024-03-06 10:14:36`
 */
export interface AdminJobQueryPageRequest {
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
  /**
   * keywords
   */
  keywords?: string
  /**
   * sort
   */
  sort?: {
    /**
     * sort field
     */
    field?: string
    /**
     * sort type :  asc,desc
     */
    sortType?: string
  }
}

/**
 * 接口 [query page↗](http://192.168.2.9:3000/project/18/interface/api/5372) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/18/interface/api/cat_809)
 * @请求头 `POST /admin/job/queryPage`
 * @更新时间 `2024-03-06 10:14:36`
 */
export interface AdminJobQueryPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    /**
     * uid
     */
    uid?: string
    /**
     * customer id
     */
    memberId?: string
    /**
     * customer name
     */
    customerName?: string
    /**
     * pickup location
     */
    pickupLocation?: string
    /**
     * drop off location
     */
    dropOffLocation?: string
    /**
     * parcel size
     */
    entireSize?: string
    /**
     * estimate price
     */
    estimatedPrice?: number
    /**
     * 1:yes,0:no
     */
    isExpressListing?: string
    /**
     * description of express listing
     */
    expressListingDesc?: string
  }[]
}

/**
 * 接口 [detail↗](http://192.168.2.9:3000/project/18/interface/api/10185) 的 **请求类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/18/interface/api/cat_809)
 * @请求头 `GET /admin/job/detail`
 * @更新时间 `2024-03-06 10:14:37`
 */
export interface AdminJobDetailRequest {
  uid?: string
  longitude?: string
  latitude?: string
}

/**
 * 接口 [detail↗](http://192.168.2.9:3000/project/18/interface/api/10185) 的 **返回类型**
 *
 * @分类 [job↗](http://192.168.2.9:3000/project/18/interface/api/cat_809)
 * @请求头 `GET /admin/job/detail`
 * @更新时间 `2024-03-06 10:14:37`
 */
export interface AdminJobDetailResponse {
  uid?: string
  descriptiveTitle?: string
  itemDescription?: string
  pickupLocation?: string
  pickupCity?: string
  pickupLongitude?: string
  pickupLatitude?: string
  dropOffLocation?: string
  dropOffCity?: string
  dropOffLongitude?: string
  dropOffLatitude?: string
  estimatedPrice?: number
  bestPrice?: number
  entireSize?: string
  entireSizeDesc?: string
  quantityOfItems?: number
  orderRefNumber?: string
  photoOfItemList?: string[]
  /**
   * 1:yes,0:no
   */
  isExpressListing?: string
  driverQualification?: number
  drivingTime?: number
  pickupDistanceFromMe?: number
  routeDistance?: number
  deliveryDeadline?: string
  pickupStartTime?: string
  pickupEndTime?: string
  viewsCount?: number
  /**
   * NEW,BID,ACCEPT_BID,READY_PICKUP,IN_TRANSIT,DELIVERED,CANCEL,COMPLETE
   */
  status?: string
  memberId?: string
  memberName?: string
  memberProfileImg?: string
  /**
   * tip_or_bonus 表job_expand
   */
  addBonus?: string
  /**
   * entire_size 表job
   */
  sizeOfEntireDelivery?: string
  /**
   * item_description 表job_expand
   */
  publicDescription?: string
  /**
   * 表job_expand
   */
  width?: number
  /**
   * 表job_expand
   */
  height?: number
  /**
   * 表job_expand
   */
  length?: number
  /**
   * 表job_expand
   */
  weight?: number
  /**
   * pickup_contact_user_name 表job_expand
   */
  receiverName?: string
  /**
   * pickup_contact_phone 表job_expand
   */
  receiverContact?: string
  /**
   * pickup_contact_email 表job_expand
   */
  receiverEmail?: string
  /**
   * deliver_time 表job_expand
   */
  deliveryDate?: string
  /**
   * deliver_time 表job_expand
   */
  deliveryTime?: string
}

/**
 * 接口 [query page↗](http://192.168.2.9:3000/project/18/interface/api/5379) 的 **请求类型**
 *
 * @分类 [job bid↗](http://192.168.2.9:3000/project/18/interface/api/cat_814)
 * @请求头 `POST /admin/jobBid/queryPage`
 * @更新时间 `2023-11-15 20:41:57`
 */
export interface AdminJobBidQueryPageRequest {
  /**
   * keywords
   */
  keywords?: string
  /**
   * sort
   */
  sort?: {
    /**
     * sort field
     */
    field?: string
    /**
     * sort type :  asc,desc
     */
    sortType?: string
  }
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [query page↗](http://192.168.2.9:3000/project/18/interface/api/5379) 的 **返回类型**
 *
 * @分类 [job bid↗](http://192.168.2.9:3000/project/18/interface/api/cat_814)
 * @请求头 `POST /admin/jobBid/queryPage`
 * @更新时间 `2023-11-15 20:41:57`
 */
export interface AdminJobBidQueryPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    /**
     * uid
     */
    uid?: string
    /**
     * driver id
     */
    driverId?: string
    /**
     * driver name
     */
    driverName?: string
    /**
     * total amount
     */
    totalAmount?: number
    /**
     * driver bid amount
     */
    driverBidAmount?: number
    /**
     * service fee
     */
    serviceFee?: number
    /**
     * peer haul fee
     */
    peerHaulFee?: number
    /**
     * 1:yes 0:no
     */
    isAccept?: string
    /**
     * description of is accepted
     */
    isAcceptDesc?: string
  }[]
}

/**
 * 接口 [query_page↗](http://192.168.2.9:3000/project/18/interface/api/5386) 的 **请求类型**
 *
 * @分类 [vehicle type↗](http://192.168.2.9:3000/project/18/interface/api/cat_819)
 * @请求头 `POST /admin/vehicleType/queryPage`
 * @更新时间 `2023-11-16 10:55:23`
 */
export interface AdminVehicleTypeQueryPageRequest {
  /**
   * keywords
   */
  keywords?: string
  /**
   * sort
   */
  sort?: {
    /**
     * sort field
     */
    field?: string
    /**
     * sort type :  asc,desc
     */
    sortType?: string
  }
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [query_page↗](http://192.168.2.9:3000/project/18/interface/api/5386) 的 **返回类型**
 *
 * @分类 [vehicle type↗](http://192.168.2.9:3000/project/18/interface/api/cat_819)
 * @请求头 `POST /admin/vehicleType/queryPage`
 * @更新时间 `2023-11-16 10:55:23`
 */
export interface AdminVehicleTypeQueryPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    /**
     * uid
     */
    uid?: string
    /**
     * vehicle type name
     */
    typeName?: string
    /**
     * create time
     */
    createTime?: string
  }[]
}

/**
 * 接口 [query_page↗](http://192.168.2.9:3000/project/18/interface/api/5393) 的 **请求类型**
 *
 * @分类 [parcel size↗](http://192.168.2.9:3000/project/18/interface/api/cat_824)
 * @请求头 `POST /admin/parcelSize/queryPage`
 * @更新时间 `2024-03-28 10:16:58`
 */
export interface AdminParcelSizeQueryPageRequest {
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
  /**
   * keywords
   */
  keywords?: string
  /**
   * sort
   */
  sort?: {
    /**
     * sort field
     */
    field?: string
    /**
     * sort type :  asc,desc
     */
    sortType?: string
  }
}

/**
 * 接口 [query_page↗](http://192.168.2.9:3000/project/18/interface/api/5393) 的 **返回类型**
 *
 * @分类 [parcel size↗](http://192.168.2.9:3000/project/18/interface/api/cat_824)
 * @请求头 `POST /admin/parcelSize/queryPage`
 * @更新时间 `2024-03-28 10:16:58`
 */
export interface AdminParcelSizeQueryPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    /**
     * uid
     */
    uid?: string
    /**
     * size code
     */
    sizeCode?: string
    /**
     * description
     */
    sizeDesc?: string
    /**
     * create time
     */
    createTime?: string
  }[]
}

/**
 * 接口 [save parcel info↗](http://192.168.2.9:3000/project/18/interface/api/10689) 的 **请求类型**
 *
 * @分类 [parcel size↗](http://192.168.2.9:3000/project/18/interface/api/cat_824)
 * @请求头 `POST /admin/parcelSize/save`
 * @更新时间 `2024-03-28 10:16:58`
 */
export interface AdminParcelSizeSaveRequest {
  uid?: string
  sizeCode: string
  sizeDesc: string
}

/**
 * 接口 [save parcel info↗](http://192.168.2.9:3000/project/18/interface/api/10689) 的 **返回类型**
 *
 * @分类 [parcel size↗](http://192.168.2.9:3000/project/18/interface/api/cat_824)
 * @请求头 `POST /admin/parcelSize/save`
 * @更新时间 `2024-03-28 10:16:58`
 */
export interface AdminParcelSizeSaveResponse {}

/**
 * 接口 [query page↗](http://192.168.2.9:3000/project/18/interface/api/5400) 的 **请求类型**
 *
 * @分类 [deadline↗](http://192.168.2.9:3000/project/18/interface/api/cat_829)
 * @请求头 `POST /admin/deadline/queryPage`
 * @更新时间 `2023-11-16 11:45:13`
 */
export interface AdminDeadlineQueryPageRequest {
  /**
   * keywords
   */
  keywords?: string
  /**
   * sort
   */
  sort?: {
    /**
     * sort field
     */
    field?: string
    /**
     * sort type :  asc,desc
     */
    sortType?: string
  }
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [query page↗](http://192.168.2.9:3000/project/18/interface/api/5400) 的 **返回类型**
 *
 * @分类 [deadline↗](http://192.168.2.9:3000/project/18/interface/api/cat_829)
 * @请求头 `POST /admin/deadline/queryPage`
 * @更新时间 `2023-11-16 11:45:13`
 */
export interface AdminDeadlineQueryPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    /**
     * uid
     */
    uid?: string
    /**
     * type
     */
    type?: string
    /**
     * taken time
     */
    takenTime?: string
  }[]
}

/**
 * 接口 [modify deadline↗](http://192.168.2.9:3000/project/18/interface/api/5407) 的 **请求类型**
 *
 * @分类 [deadline↗](http://192.168.2.9:3000/project/18/interface/api/cat_829)
 * @请求头 `POST /admin/deadline/modify`
 * @更新时间 `2023-11-16 11:45:13`
 */
export interface AdminDeadlineModifyRequest {
  /**
   * uid
   */
  uid: string
  /**
   * type
   */
  type: string
  /**
   * taken time
   */
  takenTime: string
}

/**
 * 接口 [modify deadline↗](http://192.168.2.9:3000/project/18/interface/api/5407) 的 **返回类型**
 *
 * @分类 [deadline↗](http://192.168.2.9:3000/project/18/interface/api/cat_829)
 * @请求头 `POST /admin/deadline/modify`
 * @更新时间 `2023-11-16 11:45:13`
 */
export interface AdminDeadlineModifyResponse {}

/**
 * 接口 [remove_faq↗](http://192.168.2.9:3000/project/18/interface/api/5414) 的 **请求类型**
 *
 * @分类 [deadline↗](http://192.168.2.9:3000/project/18/interface/api/cat_829)
 * @请求头 `POST /admin/deadline/remove`
 * @更新时间 `2023-11-16 11:45:13`
 */
export interface AdminDeadlineRemoveRequest {
  /**
   * uid
   */
  uid: string
}

/**
 * 接口 [remove_faq↗](http://192.168.2.9:3000/project/18/interface/api/5414) 的 **返回类型**
 *
 * @分类 [deadline↗](http://192.168.2.9:3000/project/18/interface/api/cat_829)
 * @请求头 `POST /admin/deadline/remove`
 * @更新时间 `2023-11-16 11:45:13`
 */
export interface AdminDeadlineRemoveResponse {}

/**
 * 接口 [query page↗](http://192.168.2.9:3000/project/18/interface/api/5729) 的 **请求类型**
 *
 * @分类 [driver vehicle↗](http://192.168.2.9:3000/project/18/interface/api/cat_909)
 * @请求头 `POST /admin/driverVehicle/queryPage`
 * @更新时间 `2023-11-21 18:43:28`
 */
export interface AdminDriverVehicleQueryPageRequest {
  /**
   * keywords
   */
  keywords?: string
  /**
   * sort
   */
  sort?: {
    /**
     * sort field
     */
    field?: string
    /**
     * sort type :  asc,desc
     */
    sortType?: string
  }
  /**
   * pagination
   */
  pageNum?: number
  /**
   * Number of items per page
   */
  pageSize?: number
}

/**
 * 接口 [query page↗](http://192.168.2.9:3000/project/18/interface/api/5729) 的 **返回类型**
 *
 * @分类 [driver vehicle↗](http://192.168.2.9:3000/project/18/interface/api/cat_909)
 * @请求头 `POST /admin/driverVehicle/queryPage`
 * @更新时间 `2023-11-21 18:43:28`
 */
export interface AdminDriverVehicleQueryPageResponse {
  /**
   * Current page number
   */
  current?: number
  /**
   * Page size
   */
  size?: number
  /**
   * Total size
   */
  total?: number
  /**
   * Total page numbers
   */
  pageCount?: number
  /**
   * Data list of the current page
   */
  dataList?: {
    /**
     * uid
     */
    uid?: string
    /**
     * driver id
     */
    driverId?: string
    /**
     * driver name
     */
    driverName?: string
    /**
     * vehicle image
     */
    vehiclePhoto?: string
    /**
     * vehicle image list
     */
    vehiclePhotoList?: string[]
    /**
     * modal
     */
    vehicleModel?: string
    /**
     * color
     */
    vehicleColor?: string
    /**
     * vehicle name
     */
    vehicleMake?: string
    /**
     * type
     */
    vehicleType?: string
    /**
     * front image
     */
    driversLicenseFront?: string
    /**
     * back image
     */
    driversLicenseBack?: string
    /**
     * license no
     */
    driversLicenseNo?: string
  }[]
}

/* prettier-ignore-end */
