import { omit } from './omit'

describe('omit', () => {
  test('should omit nothing from an empty dictionary', () => {
    expect(omit({}, [])).toEqual({})
  })

  test('should omit keys', () => {
    expect(omit({ a: 1, b: 2, c: 3, d: 4 }, ['a', 'c'])).toEqual({ b: 2, d: 4 })
    expect(omit(['a', 'c'])({ a: 1, b: 2, c: 3, d: 4 })).toEqual({ b: 2, d: 4 })
  })
})
