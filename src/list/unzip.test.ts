import { unzip } from './unzip'

describe('unzip', () => {
  test('should unzip two lists', () => {
    expect(
      unzip([
        [1, 'a'],
        [2, 'b'],
        [3, 'c']
      ])
    ).toEqual([
      [1, 2, 3],
      ['a', 'b', 'c']
    ])
  })
})
