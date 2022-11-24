const request = require('supertest')

const server = require('../server')
const log = require('../logger')
const db = require('../db/shop')

jest.mock('../db/shop')
jest.mock('../logger')

const mockProducts = [
  {
    id: 1,
    name: 'large veggie box',
    price: 29,
  },
  {
    id: 2,
    name: 'small veggie box',
    price: 22,
  },
]

describe('GET /api/v1/shop/:id', () => {
  it('responds with all the products from the garden', () => {
    db.getProductsByGarden.mockImplementation(() => {
      return Promise.resolve(mockProducts)
    })

    return request(server)
      .get('/api/v1/shop/:id')
      .then((res) => {
        expect(res.body[0]).toEqual({
          id: 1,
          name: 'large veggie box',
          price: 29,
        })
        expect(res.body[1]).toEqual({
          id: 2,
          name: 'small veggie box',
          price: 22,
        })
        return null
      })
  })

  it('responds with 500 and correct error object on DB error', () => {
    db.getProductsByGarden.mockImplementation(() => {
      return Promise.reject(new Error('mock getProductsByGarden error'))
    })
    return request(server)
      .get('/api/v1/shop/:id')
      .expect(500)
      .then((res) => {
        expect(log).toHaveBeenCalledWith('mock getProductsByGarden error')
        expect(res.body.error.title).toBe('Unable to retrieve garden products')
        return null
      })
  })
})
