import { values } from './values'

describe('values', () => {
  test('should convert empty dictionary to empty list', () => {
    expect(values({})).toEqual([])
  })

  test('should convert a dictionary to a list', () => {
    expect(values({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3])
  })
})
