import { toList } from './toList'

describe('toList', () => {
  test('should convert empty dictionary to empty list', () => {
    expect(toList({})).toEqual([])
  })

  test('should convert a dictionary to a list', () => {
    expect(toList({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3])
  })
})
