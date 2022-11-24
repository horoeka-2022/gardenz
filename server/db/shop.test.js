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

describe('getProductsByGardens', () => {
  it('gets all products by gardens id', () => {
    return db.getProductsByGardens(3, testDb).then((produce) => {
      expect(produce).toHaveLength(1)
      expect(produce[0].name).toMatch('small veggie box')
      expect(produce[0].price).toBe(22)
      expect(produce[0].stock).toBe(15)
      return null
    })
  })
})
