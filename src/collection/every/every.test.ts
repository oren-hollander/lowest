import { every } from '.'
import { identity } from '../../function'

describe('every', () => {
  describe('non curried version', () => {
    test('should be true for an empty list', () => {
      expect(every([], identity)).toBe(true)
    })

    test('should be false if not every item in the list is true', () => {
      expect(every([true, false, false], identity)).toBe(false)
    })

    test('should be true if every item in the list is true', () => {
      expect(every([true, true, true], identity)).toBe(true)
    })
  })

  describe('curried version', () => {
    const isEvery = every<boolean>(identity)

    test('should be true for an empty list', () => {
      expect(isEvery([])).toBe(true)
    })

    test('should be false if not every item in the list is true', () => {
      expect(isEvery([true, false, false])).toBe(false)
    })

    test('should be true if every item in the list is true', () => {
      expect(isEvery([true, true, true])).toBe(true)
    })
  })
})
