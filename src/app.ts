window.liff.init(
  data => {
    const {userId} = data.context
    const accessToken = window.liff.getAccessToken()
    console.log(userId, accessToken)
  },
  error => {
    console.log(error.message)
  },
)

export default () => {
  console.log('aaa')
  return 'aaa'
}
