import { compact } from './compact'

describe('compact', () => {
  describe('array', () => {
    test('should compact empty array', () => {
      expect(compact([])).toEqual([])
    })

    test('should compact array with non nullish values', () => {
      expect(compact([1, 2, 'three', { four: 5 }])).toEqual([1, 2, 'three', { four: 5 }])
    })

    test('should compact array with null', () => {
      expect(compact([1, null, 2])).toEqual([1, 2])
      expect(compact([1, undefined, 2])).toEqual([1, 2])
    })
  })

  describe('object', () => {
    test('should compact empty array', () => {
      expect(compact({})).toEqual({})
    })

    test('should compact array with non nullish values', () => {
      expect(compact({ a: 1, b: 2, c: 'three', d: { four: 5 } })).toEqual({ a: 1, b: 2, c: 'three', d: { four: 5 } })
    })

    test('should compact array with null', () => {
      expect(compact({ a: 1, b: null, c: 2 })).toEqual({ a: 1, c: 2 })
      expect(compact({ a: 1, b: undefined, c: 2 })).toEqual({ a: 1, c: 2 })
    })
  })
})
