import { set } from '.'

interface Thing {
  a: number
  b: string
}

describe('set', () => {
  let thing: Thing

  beforeEach(() => {
    thing = {
      a: 1,
      b: 'hello'
    }
  })

  test('non curried overload should set', () => {
    const updated = set(thing, 'a', 2)
    expect(updated).toEqual({ a: 2, b: 'hello' })
  })

  test('curried overload should set', () => {
    const updated = set<Thing, 'b'>('b', 'hello-hello')(thing)
    expect(updated).toEqual({ a: 1, b: 'hello-hello' })
  })
})
