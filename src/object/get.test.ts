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

    test('should get with getter', () => {
      expect(get(thing, t => t.c.d)).toEqual(42)
      expect(get(thing, t => t.c).d).toEqual(42)
    })
  })

  describe('curried overload', () => {
    test('should get key', () => {
      expect(get<Thing, 'a'>('a')(thing)).toEqual(1)
    })

    test('should get with getter', () => {
      expect(get<Thing, number>(t => t.c.d)(thing)).toEqual(42)
      expect(get<Thing, InnerThing>(t => t.c)(thing).d).toEqual(42)
      expect(get((t: Thing) => t.c)(thing).d).toEqual(42)
    })
  })
})
