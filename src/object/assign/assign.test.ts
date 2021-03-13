import { assign } from '.'

describe('assign', () => {
  describe('non curried overload', () => {
    test('assign should merge objects', () => {
      expect(assign({ a: 1 }, { b: 'hello' })).toEqual({ a: 1, b: 'hello' })
    })

    test('assign should override objects', () => {
      expect(assign({ a: 1, b: 'original' }, { b: 'new' })).toEqual({ a: 1, b: 'new' })
    })
  })

  describe('curried overload', () => {
    test('assign should merge objects', () => {
      expect(assign({ b: 'hello' })({ a: 1 })).toEqual({ a: 1, b: 'hello' })
    })

    test('assign should override objects', () => {
      expect(assign({ b: 'new' })({ a: 1, b: 'original' })).toEqual({ a: 1, b: 'new' })
    })
  })
})
