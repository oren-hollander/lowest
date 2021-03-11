import { omit } from './omit'

describe('omit', () => {
  test('should omit nothing from an empty dictionary', () => {
    expect(omit({}, [])).toEqual({})
  })

  test('should omit keys from dictionary', () => {
    expect(omit({ a: 1, b: 2, c: 3, d: 4 }, ['a', 'c'])).toEqual({ b: 2, d: 4 })
    expect(omit(['a', 'c'])({ a: 1, b: 2, c: 3, d: 4 })).toEqual({ b: 2, d: 4 })
  })

  test('should omit keys from an object', () => {
    interface I {
      a: number
      b: string
      c: boolean
    }

    const i: I = {
      a: 1,
      b: '2',
      c: true
    }

    const i2 = omit(i, ['c'])
    expect(i2).toEqual({ a: 1, b: '2' })

    const i3 = omit(i2, ['b'])
    expect(i3).toEqual({ a: 1 })
  })
})
