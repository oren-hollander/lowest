import { filter } from './filter'
import { Dictionary } from '../types'

describe('filter', () => {
  describe('list', () => {
    test('should filter an empty list', () => {
      expect(filter([], x => x > 1)).toEqual([])
    })

    test('should filter a list', () => {
      expect(filter([1, 2, 3], x => x > 1)).toEqual([2, 3])
    })
  })

  describe('dictionary', () => {
    test('should filter an empty dictionary', () => {
      expect(filter({} as Dictionary<number>, x => x > 1)).toEqual({})
    })

    test('should filter a dictionary', () => {
      expect(filter({ a: 1, b: 2, c: 3 }, x => x > 1)).toEqual({ b: 2, c: 3 })
    })
  })

  describe('collection', () => {
    test('should filter an empty collection', () => {
      // expect(filter({} as Collection<number>, x => x > 1)).toEqual({})
    })

    test('should filter a dictionary', () => {
      // expect(filter({ a: 1, b: 2, c: 3 } as Collection<number>, x => x > 1)).toEqual({ b: 2, c: 3 })
      // expect(filter([1, 2, 3] as Collection<number>, x => x > 1)).toEqual([2, 3])
    })
  })
})
