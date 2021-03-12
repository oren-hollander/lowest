import { compact } from './compact'

describe('compact', () => {
  describe('list', () => {
    test('should compact an empty list', () => {
      expect(compact([])).toEqual([])
    })

    test('should compact a list with non nil values', () => {
      expect(compact([1, 2, 'three', { four: 5 }])).toEqual([1, 2, 'three', { four: 5 }])
    })

    test('should compact a list with nil value', () => {
      expect(compact([1, null, 2])).toEqual([1, 2])
      expect(compact([1, undefined, 2])).toEqual([1, 2])
    })
  })
})
