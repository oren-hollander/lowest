import { filterDictionary } from '.'
import { Dictionary } from '../dictionary'

describe('filter', () => {
  describe('dictionary', () => {
    test('should filter an empty dictionary', () => {
      expect(filterDictionary({} as Dictionary<number>, x => x > 1)).toEqual({})
    })

    test('should filter a dictionary', () => {
      expect(filterDictionary({ a: 1, b: 2, c: 3 }, x => x > 1)).toEqual({ b: 2, c: 3 })
    })
  })
})
