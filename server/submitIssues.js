const request = require('superagent')
require('dotenv').config()

const accessToken = process.env.GITHUB_PERSONAL_ACCESS_TOKEN
const destinationAPI =
  'https://api.github.com/repos/horoeka-2022/gardenz/issues'
const userAgent = 'gardenz'

export function postIssue(issue) {
  console.log(accessToken)
  return request
    .post(destinationAPI)
    .set('User-Agent', userAgent)
    .set('Authorization', `token ${accessToken}`)
    .send(issue)
}
