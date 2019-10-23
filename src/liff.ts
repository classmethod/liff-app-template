export default window.liff

export function init() {
  const { liff } = window
  const LIFF_ID = process.env.LIFF_ID
  if (!LIFF_ID) {
    throw new Error('Set LIFF ID as env var "LIFF_ID"')
  }

  return new Promise((resolve, reject) => {
    liff.init({
      liffId: LIFF_ID
    }).then(() => {
      if (!liff.isLoggedIn()) {
        liff.login()
      }

      resolve(true)
    }).catch(error => {
      reject(error)
    })
  })
}
