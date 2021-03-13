import { zip } from '.'

describe('zipNonMatching', () => {
  test('should zipShort two non matching lists', () => {
    expect(zip([1, 2, 3], ['a', 'b'])).toEqual([
      [1, 'a'],
      [2, 'b'],
      [3, undefined]
    ])
  })

  test('curried version should zipShort two non matching lists', () => {
    expect(zip(['a', 'b'])([1, 2, 3])).toEqual([
      [1, 'a'],
      [2, 'b'],
      [3, undefined]
    ])
  })
})
