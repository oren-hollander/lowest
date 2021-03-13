import { take } from '.'

describe('drop', () => {
  describe('non curried version', () => {
    test('should not drop when dropping zero', () => {
      expect(take([1, 2, 3], 0)).toEqual([])
    })

    test('should drop one', () => {
      expect(take([1, 2, 3], 1)).toEqual([1])
    })

    test('should drop all', () => {
      expect(take([1, 2, 3], 4)).toEqual([1, 2, 3])
    })
  })

  describe('curried version', () => {
    test('should not drop when dropping zero', () => {
      expect(take(0)([1, 2, 3])).toEqual([])
    })

    test('should drop one', () => {
      expect(take(1)([1, 2, 3])).toEqual([1])
    })

    test('should drop all', () => {
      expect(take(4)([1, 2, 3])).toEqual([1, 2, 3])
    })
  })
})
