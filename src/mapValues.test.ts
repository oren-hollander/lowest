import { Dictionary } from './dictionary'
import { mapValues } from './mapValues'

describe('mapValues', () => {
  let dict: Dictionary<number>

  beforeEach(() => {
    dict = { a: 1, b: 2, c: 3 }
  })

  test('non curried overload should map values', () => {
    expect(mapValues(dict, x => x + 1)).toEqual({ a: 2, b: 3, c: 4 })
  })

  test('curried version should map values', () => {
    expect(mapValues((x: number) => x + 1)(dict)).toEqual({ a: 2, b: 3, c: 4 })
  })
})
