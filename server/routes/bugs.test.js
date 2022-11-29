const request = require('supertest')
const server = require('../server')
const { createBug } = require('./bugCreate')

jest.mock('./bugCreate')

describe('POST /api/v1/bugs', async () => {
  try {
    await request(server).post('api/v1/bugs')
    createBug.mockImplementation(() => {
      return Promise.resolve()
    })
  } catch (err) {
    console.error(err.message)
  }
})
