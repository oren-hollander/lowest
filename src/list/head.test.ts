import { head } from './head'

describe('head', () => {
  test('should return the first element', () => {
    expect(head([1, 2, 3])).toEqual(1)
  })

  test('should throw when list is empty', () => {
    expect(() => head([])).toThrow()
  })
})
