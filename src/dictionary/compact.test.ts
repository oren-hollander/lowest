import { compact } from './compact'

describe('compact', () => {
  describe('dictionary', () => {
    test('should compact an empty dictionary', () => {
      expect(compact({})).toEqual({})
    })

    test('should compact a dictionary with non nil values', () => {
      expect(compact({ a: 1, b: 2, c: 'three', d: { four: 5 } })).toEqual({ a: 1, b: 2, c: 'three', d: { four: 5 } })
    })

    test('should compact a dictionary with nil values', () => {
      expect(compact({ a: 1, b: null, c: 2 })).toEqual({ a: 1, c: 2 })
      expect(compact({ a: 1, b: undefined, c: 2 })).toEqual({ a: 1, c: 2 })
    })
  })
})
