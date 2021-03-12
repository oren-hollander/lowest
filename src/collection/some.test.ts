import { some } from './some'
import { identity } from '../function'

describe('some', () => {
  describe('non curried version', () => {
    test('should be false for an empty list', () => {
      expect(some([], identity)).toBe(false)
    })

    test('should be true if some items in the list are true', () => {
      expect(some([true, false, false], identity)).toBe(true)
    })

    test('should be false if all items in the list are false', () => {
      expect(some([false, false, false], identity)).toBe(false)
    })
  })

  describe('curried version', () => {
    const areSome = some<boolean>(identity)

    test('should be false for an empty list', () => {
      expect(areSome([])).toBe(false)
    })

    test('should be true if some items in the list are true', () => {
      expect(areSome([true, false, false])).toBe(true)
    })

    test('should be false if all items in the list are false', () => {
      expect(areSome([false, false, false])).toBe(false)
    })
  })
})
