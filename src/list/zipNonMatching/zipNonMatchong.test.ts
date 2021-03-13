import { zipNonMatching } from '.'

describe('zipNonMatching', () => {
  test('should zip two non matching lists', () => {
    expect(zipNonMatching([1, 2, 3], ['a', 'b'])).toEqual([
      [1, 'a'],
      [2, 'b'],
      [3, undefined]
    ])
  })

  test('curried verion should zip two non matching lists', () => {
    expect(zipNonMatching(['a', 'b'])([1, 2, 3])).toEqual([
      [1, 'a'],
      [2, 'b'],
      [3, undefined]
    ])
  })
})
