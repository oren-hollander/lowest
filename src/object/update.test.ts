import { update } from './update'

interface Thing {
  a: number
  b: string
}

describe('update', () => {
  let thing: Thing

  beforeEach(() => {
    thing = {
      a: 1,
      b: 'hello',
    }
  })

  test('non curried overload should update', () => {
    const updated = update(thing, 'a', x => x + 1)
    expect(updated).toEqual({ a: 2, b: 'hello' })
  })

  test('curried overload should update', () => {
    const updated = update<Thing, 'b'>('b', x => `${x}-${x}`)(thing)
    expect(updated).toEqual({ a: 1, b: 'hello-hello' })
  })
})
