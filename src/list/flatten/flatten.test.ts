import { flatten } from './flatten'

describe('flatten', () => {
  test('should flatten an empty list', () => {
    expect(flatten([])).toEqual([])
  })

  test('should flatten an singleton list', () => {
    expect(flatten([[1, 2, 3]])).toEqual([1, 2, 3])
  })

  test('should flatten an  list', () => {
    expect(flatten([[1, 2, 3], [4, 5], [], [6]])).toEqual([1, 2, 3, 4, 5, 6])
  })
})
