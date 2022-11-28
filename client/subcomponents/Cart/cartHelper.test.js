import { calculateGst } from './cartHelper'

describe('calculate gst', () => {
  it('adding gst', () => {
    const result = calculateGst(100)
    expect(result).toBe(114.99999999999999)
  })
})
