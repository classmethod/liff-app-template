// refer: https://developers.line.biz/ja/reference/liff/

interface LiffConfig {
  liffId: string
}

interface LiffError {
  code: string
  message: string
}

type SuccessCallback = () => void
type ErrorCallback = (error: LiffError) => void
type InitCallback = (config: LiffConfig, successCallback: SuccessCallback, errorCallback: ErrorCallback) => void
type InitPromise = (config: LiffConfig) => Promise<void>
type Init = InitCallback & InitPromise

interface LoginConfig {
  redirectUri?: string
}

interface Profile {
  userId: string
  displayName: string
  pictureUrl: string
  statusMessage: string
}

declare interface Liff {
  init: Init
  login: (loginConfig?: LoginConfig) => void
  isLoggedIn: () => boolean
  getProfile: () => Promise<Profile>
  getAccessToken: () => string
}
