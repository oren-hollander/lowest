import { chunk } from './chunk'

describe('chunk', () => {
  describe('non curried version', () => {
    test('should throw when chunk size is zero', () => {
      expect(() => chunk([1, 2, 3], 0)).toThrow()
    })

    test('should chunk an empty list', () => {
      expect(chunk([], 2)).toEqual([])
    })

    test('should chunk an list with a last incomplete chunk', () => {
      expect(chunk([1, 2, 3], 2)).toEqual([[1, 2], [3]])
    })

    test('should chunk an list with a last complete chunk', () => {
      expect(chunk([1, 2, 3, 4], 2)).toEqual([
        [1, 2],
        [3, 4]
      ])
    })
  })

  describe('curried version', () => {
    test('should throw when chunk size is zero', () => {
      expect(() => chunk(0)([1, 2, 3])).toThrow()
    })

    test('should chunk an empty list', () => {
      expect(chunk(2)([])).toEqual([])
    })

    test('should chunk an list with a last incomplete chunk', () => {
      expect(chunk(2)([1, 2, 3])).toEqual([[1, 2], [3]])
    })

    test('should chunk an list with a last complete chunk', () => {
      expect(chunk(2)([1, 2, 3, 4])).toEqual([
        [1, 2],
        [3, 4]
      ])
    })
  })
})
