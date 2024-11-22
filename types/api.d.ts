/** 所有 api 介面的回應資料都應該準守該格式 */
interface ApiResponseData<T> {
  code: number
  data: T
  message?: string
  totalCount?: number
}
