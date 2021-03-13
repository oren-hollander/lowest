import { mapDictionary } from '.'
import { Dictionary } from '../dictionary'

describe('map', () => {
  describe('dictionary', () => {
    const dict: Dictionary<number> = { a: 1, b: 2, c: 3 }

    test('non curried overload should map', () => {
      expect(mapDictionary(dict, x => x + 1)).toEqual({ a: 2, b: 3, c: 4 })
    })

    test('curried version should map', () => {
      expect(mapDictionary((x: number) => x + 1)(dict)).toEqual({ a: 2, b: 3, c: 4 })
    })
  })
})
