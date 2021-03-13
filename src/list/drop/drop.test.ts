import { drop } from '.'

describe('drop', () => {
  describe('non curried version', () => {
    test('should not drop when dropping zero', () => {
      expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3])
    })

    test('should drop one', () => {
      expect(drop([1, 2, 3], 1)).toEqual([2, 3])
    })

    test('should drop all', () => {
      expect(drop([1, 2, 3], 4)).toEqual([])
    })
  })

  describe('curried version', () => {
    test('should not drop when dropping zero', () => {
      expect(drop(0)([1, 2, 3])).toEqual([1, 2, 3])
    })

    test('should drop one', () => {
      expect(drop(1)([1, 2, 3])).toEqual([2, 3])
    })

    test('should drop all', () => {
      expect(drop(4)([1, 2, 3])).toEqual([])
    })
  })
})
