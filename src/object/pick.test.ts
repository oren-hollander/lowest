import { pick } from './pick'

describe('keys', () => {
  test('should pick nothing from an empty dictionary', () => {
    expect(pick({}, [])).toEqual({})
  })

  test('should pick keys of a dictionary', () => {
    expect(pick({ a: 1, b: 2, c: 3, d: 4 }, ['a', 'c'])).toEqual({ a: 1, c: 3 })
  })

  test('should pick keys of an object', () => {
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

    const i2 = pick(i, ['a', 'b'])
    expect(i2).toEqual({ a: 1, b: '2' })

    const i3 = pick(i2, ['a'])
    expect(i3).toEqual({ a: 1 })
  })
})
