const request = require('superagent')
require('dotenv').config()

module.exports = { createBug }

function createBug(issue) {
  const destinationAPI =
    'https://api.github.com/repos/horoeka-2022/gardenz/issues'
  const userAgent = 'gardenz'
  const accessToken = process.env.GITHUB_PERSONAL_ACCESS_TOKEN
  return request
    .post(destinationAPI)
    .set('User-Agent', userAgent)
    .set('Authorization', `Bearer ${accessToken}`)
    .send(issue)
}
