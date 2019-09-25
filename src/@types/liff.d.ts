// refer: https://developers.line.biz/ja/reference/liff/

declare interface LiffError {
  code: string
  message: string
}

declare interface LiffData {
  language: string
  context: {
    type: 'utou' | 'room' | 'group' | 'name'
    viewType: 'compact' | 'tall' | 'full'
    userId: string
    utouId?: string
    roomId?: string
    groupId?: string
  }
}

type SuccessCallback = (data: LiffData) => void
type ErrorCallback = (error: LiffError) => void
declare interface Liff {
  init: (successCallback: SuccessCallback, errorCallback: ErrorCallback) => void
  getAccessToken: () => string
}

interface Window {
  liff: Liff
}
