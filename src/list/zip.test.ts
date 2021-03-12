import { zip } from './zip'

describe('zip', () => {
  test('should zip two lists', () => {
    expect(zip([1, 2, 3], ['a', 'b', 'c'])).toEqual([
      [1, 'a'],
      [2, 'b'],
      [3, 'c']
    ])
  })

  test('should zip two lists with different length', () => {
    expect(zip([1, 2, 3], ['a', 'b'])).toEqual([
      [1, 'a'],
      [2, 'b']
    ])
  })

  test('curried version should zip two lists', () => {
    expect(zip(['a', 'b', 'c'])([1, 2, 3])).toEqual([
      [1, 'a'],
      [2, 'b'],
      [3, 'c']
    ])
  })
})
