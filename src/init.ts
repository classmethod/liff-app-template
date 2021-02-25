import liff from '@line/liff'

export default function init() {
  const LIFF_ID = process.env.LIFF_ID
  if (LIFF_ID === undefined) {
    throw new Error('Set LIFF ID as env var "LIFF_ID"')
  }

  return new Promise(async (resolve, reject) => {
    try {
      await liff.init({
        liffId: LIFF_ID
      })
      if (!liff.isLoggedIn()) {
        liff.login()
      }

      resolve('')
    }
    catch(error) {
      reject(error)
    }
  })
}
