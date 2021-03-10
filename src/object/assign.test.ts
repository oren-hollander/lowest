import { assign } from './assign'

describe('assign', () => {
  test('assign should merge objects', () => {
    expect(assign({ a: 1 }, { b: 'hello' })).toEqual({ a: 1, b: 'hello' })
  })

  test('curried overload should update', () => {
    expect(assign({ a: 1 })({ b: 'hello' })).toEqual({ a: 1, b: 'hello' })
  })
})
