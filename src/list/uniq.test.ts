import { uniq } from './uniq'

describe('uniq', () => {
  test('should return an empty list when passed an empty list', () => {
    expect(uniq([])).toEqual([])
  })

  test('should return the same list when passed a unique list', () => {
    expect(uniq([1, 2, 3])).toEqual([1, 2, 3])
  })

  test('should return a unique list when passed a list with duplicates', () => {
    expect(uniq([1, 2, 3, 2])).toEqual([1, 2, 3])
  })
})
