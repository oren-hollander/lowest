import { zipShort } from '.'

describe('zip', () => {
  test('should zipShort two lists', () => {
    expect(zipShort([1, 2, 3], ['a', 'b', 'c'])).toEqual([
      [1, 'a'],
      [2, 'b'],
      [3, 'c']
    ])
  })

  test('should zipShort two lists with different length', () => {
    expect(zipShort([1, 2, 3], ['a', 'b'])).toEqual([
      [1, 'a'],
      [2, 'b']
    ])
  })

  test('curried version should zipShort two lists', () => {
    expect(zipShort(['a', 'b', 'c'])([1, 2, 3])).toEqual([
      [1, 'a'],
      [2, 'b'],
      [3, 'c']
    ])
  })
})
