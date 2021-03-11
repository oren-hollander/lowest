import { zip } from './zip'

describe('zip', () => {
  test('should zip two lists', () => {
    expect(zip([1, 2, 3], ['a', 'b', 'c'])).toEqual([
      [1, 'a'],
      [2, 'b'],
      [3, 'c']
    ])
  })
})

