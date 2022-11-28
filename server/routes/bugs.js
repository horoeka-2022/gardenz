const request = require('superagent')
require('dotenv').config()
const express = require('express')

const router = express.Router()

module.exports = router

router.post('/', async (req, res) => {
  const issue = {
    title: req.body.title,
    body: req.body.body,
  }
  const accessToken = process.env.GITHUB_PERSONAL_ACCESS_TOKEN
  const destinationAPI =
    'https://api.github.com/repos/horoeka-2022/gardenz/issues'
  const userAgent = 'gardenz'
  try {
    await request
      .post(destinationAPI)
      .set('User-Agent', userAgent)
      .set('Authorization', `Bearer ${accessToken}`)
      .send(issue)
    res.sendStatus(201)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({
      error: {
        title: err.message,
      },
    })
  }
})
