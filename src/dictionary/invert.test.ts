import { invert } from './invert'

describe('keys', () => {
  test('should invert an empty dictionary to an empty dictionary', () => {
    expect(invert({})).toEqual({})
  })

  test('should invert a dictionary', () => {
    expect(invert({ a: 1, b: 2, c: '3' })).toEqual({ 1: 'a', 2: 'b', 3: 'c' })
  })
})
