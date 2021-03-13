import { find } from './find'
import { Dictionary } from '../dictionary'
import { Collection } from './collection'

describe('find', () => {
  describe('list', () => {
    test('should not find an item in an empty list', () => {
      expect(find([], x => x > 1)).toBeUndefined()
    })

    test('should find the first item in a list that satisfied the predicate', () => {
      expect(find([1, 2, 3], x => x > 1)).toBe(2)
    })
  })

  describe('dictionary', () => {
    test('should not find an item in an empty list', () => {
      expect(find({} as Dictionary<number>, x => x > 1)).toBeUndefined()
    })

    test('should find the first item in a list that satisfied the predicate', () => {
      expect(find({ a: 1, b: 2, c: 3 }, x => x > 1)).toBe(2)
    })
  })

  describe('collection', () => {
    test('should find the first item in a collection that satisfied the predicate', () => {
      expect(find({} as Collection<number>, x => x > 1)).toBeUndefined()
      expect(find([] as Collection<number>, x => x > 1)).toBeUndefined()
    })

    test('should find a dictionary', () => {
      expect(find({ a: 1, b: 2, c: 3 } as Collection<number>, x => x > 1)).toBe(2)
      expect(find([1, 2, 3] as Collection<number>, x => x > 1)).toBe(2)
    })
  })
})
