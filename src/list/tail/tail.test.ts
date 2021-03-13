import { tail } from '.'

describe('tail', () => {
  test('should drop the first element', () => {
    expect(tail([1, 2, 3])).toEqual([2, 3])
  })

  test('should throw when list is empty', () => {
    expect(tail([])).toEqual([])
  })
})
