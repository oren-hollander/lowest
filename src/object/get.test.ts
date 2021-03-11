import { get } from './get'

interface InnerThing {
  d: number
}

interface Thing {
  a: number
  b: string
  c: InnerThing
}

describe('get', () => {
  let thing: Thing

  beforeEach(() => {
    thing = {
      a: 1,
      b: 'hello',
      c: {
        d: 42
      }
    }
  })

  describe('non curried overload', () => {
    test('should get key', () => {
      expect(get(thing, 'a')).toEqual(1)
    })
  })

  describe('curried overload', () => {
    test('should get key', () => {
      expect(get<Thing, 'a'>('a')(thing)).toEqual(1)
    })
  })
})
