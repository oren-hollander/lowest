import { filter } from '.'

describe('filter', () => {
  describe('list', () => {
    test('should filter an empty list', () => {
      expect(filter([], x => x > 1)).toEqual([])
    })

    test('should filter a list', () => {
      expect(filter([1, 2, 3], x => x > 1)).toEqual([2, 3])
    })
  })
})
