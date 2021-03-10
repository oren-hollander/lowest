import { pick } from './pick'

describe('keys', () => {
  test('should pick nothing from an empty dictionary', () => {
    expect(pick({}, [])).toEqual({})
  })

  test('should pick keys', () => {
    expect(pick({ a: 1, b: 2, c: 3, d: 4 }, ['a', 'c'])).toEqual({ a: 1, c: 3 })
  })
})
