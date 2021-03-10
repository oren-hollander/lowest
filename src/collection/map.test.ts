import { map } from './map'
import { Dictionary } from '../types'

describe('map', () => {
  describe('object', () => {
    let dict: Dictionary<number>

    beforeEach(() => {
      dict = { a: 1, b: 2, c: 3 }
    })

    test('non curried overload should map', () => {
      expect(map(dict, x => x + 1)).toEqual({ a: 2, b: 3, c: 4 })
    })

    test('curried version should map', () => {
      expect(map((x: number) => x + 1)(dict)).toEqual({ a: 2, b: 3, c: 4 })
    })
  })

  describe('array', () => {
    let xs: number[]

    beforeEach(() => {
      xs = [1, 2, 3]
    })

    test('non curried overload should map', () => {
      expect(map(xs, x => x + 1)).toEqual([2, 3, 4])
    })

    test('curried version should map', () => {
      expect(map((x: number) => x + 1)(xs)).toEqual([2, 3, 4])
    })
  })
})
