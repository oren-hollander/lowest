import { filter } from './filter'

describe('filter', () => {
  describe('list', () => {
    test('should filter empty list', () => {
      expect(filter([1, 2, 3], x => x > 1)).toEqual([2, 3])
    })
  })

  describe('dictionary', () => {
    test('should filter empty dictionary', () => {
      expect(filter({ a: 1, b: 2, c: 3 }, x => x > 1)).toEqual({ b: 2, c: 3 })
    })
  })
})
