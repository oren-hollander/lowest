import { map } from '.'
import { List } from '../list'

describe('map', () => {
  describe('list', () => {
    const xs: List<number> = [1, 2, 3]

    test('non curried overload should map', () => {
      expect(map(xs, x => x + 1)).toEqual([2, 3, 4])
    })

    test('curried version should map', () => {
      expect(map((x: number) => x + 1)(xs)).toEqual([2, 3, 4])
    })
  })
})
