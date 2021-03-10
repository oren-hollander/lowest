import { keys } from './keys'

describe('keys', () => {
  test('should convert empty dictionary to empty list', () => {
    expect(keys({})).toEqual([])
  })

  test('should convert a dictionary to a list', () => {
    expect(keys({ a: 1, b: 2, c: 3 })).toEqual(['a', 'b', 'c'])
  })
})
