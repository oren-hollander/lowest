import { concat } from './concat'

describe('concat', () => {
  describe('non curried version', () => {
    test('should concat two empty lists', () => {
      expect(concat([], [])).toEqual([])
    })

    test('should concat to an empty lists', () => {
      expect(concat([], [1, 2, 3])).toEqual([1, 2, 3])
    })

    test('should concat an empty list to a list', () => {
      expect(concat([1, 2, 3], [])).toEqual([1, 2, 3])
    })

    test('should concat two lists', () => {
      expect(concat([1, 2], [3])).toEqual([1, 2, 3])
    })
  })

  describe('curried version', () => {
    test('should concat two empty lists', () => {
      expect(concat([])([])).toEqual([])
    })

    test('should concat to an empty lists', () => {
      expect(concat<number>([])([1, 2, 3])).toEqual([1, 2, 3])
    })

    test('should concat an empty list to a list', () => {
      expect(concat([1, 2, 3])([])).toEqual([1, 2, 3])
    })

    test('should concat two lists', () => {
      expect(concat([1, 2])([3])).toEqual([1, 2, 3])
    })
  })
})
