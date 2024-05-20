import express, { json } from 'express'
import axios from 'axios'

const EASY_URL = 'https://www.escquickbalanceinquiry.com/QBI/QBalance/Balcon'

const EASY_HEADERS = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0',
  Referer: 'https://www.escquickbalanceinquiry.com/QBI',
}

const app = express()
app.use(json())

app.get('/get-balance', async (req, res) => {
  const response: Record<string, any> = {}

  const searchParams = req.query
  const account = searchParams.account
  const type = searchParams.type
  const extra = searchParams.extra

  try {
    const apiResponse = await axios.post(
      EASY_URL,
      {
        accnum: account,
        RadioVal: type,
        AddInfo: extra,
      },
      { headers: EASY_HEADERS }
    )

    response.balance = apiResponse.data
  } catch (e: any) {
    return res.status(e.response.status).json(e)
  }

  res.json(response)
})

module.exports = app
