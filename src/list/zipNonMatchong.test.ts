import { zipNonMatching } from './zipNonMatching'

describe('zip', () => {
  test('should zip two non matching lists', () => {
    expect(zipNonMatching([1, 2, 3], ['a', 'b'])).toEqual([
      [1, 'a'],
      [2, 'b'],
      [3, undefined]
    ])
  })
})
