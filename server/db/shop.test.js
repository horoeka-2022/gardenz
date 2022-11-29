const knex = require('knex')
const config = require('./knexfile').test
const testDb = knex(config)

const db = require('./shop')

jest.setTimeout(10000)

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

afterAll(() => {
  return testDb.destroy()
})

describe('getProductsByGarden', () => {
  it('gets all products of the garden', () => {
    return db.getProductsByGarden(3, testDb).then((produce) => {
      expect(produce).toHaveLength(2)
      expect(produce[0].id).toBe(3) // exclude products that aren't for the garden
      expect(produce[0].name).toMatch('small veggie box')
      expect(produce[0].price).toBe(22.99)
      expect(produce[0].stock).toBe(15)
      expect(produce[1].id).toBe(3) // exclude products that aren't for the garden
      expect(produce[1].name).toMatch('large veggie box')
      expect(produce[1].price).toBe(29.99)
      expect(produce[1].stock).toBe(10)
      return null
    })
  })
})
