import { has } from './has'
import { Dictionary } from '../types'

interface Thing {
  a: number
  b?: string
  c: boolean | undefined
}

describe('has', () => {
  describe('non curried overload', () => {
    test('should check if a key exists for object', () => {
      const thing: Thing = {
        a: 1,
        c: true
      }
      expect(has(thing, 'a')).toBe(true)
      expect(has(thing, 'b')).toBe(false)
      expect(has(thing, 'c')).toBe(true)
    })

    test('should check if a key exists for dictionary', () => {
      const thing: Dictionary<number | undefined> = { a: 1, b: undefined }

      expect(has(thing, 'a')).toBe(true)
      expect(has(thing, 'b')).toBe(true)
      expect(has(thing, 'c')).toBe(false)
    })
  })

  describe('curried overload', () => {
    test('should check if a key exists for object', () => {
      const thing: Thing = {
        a: 1,
        c: true
      }
      expect(has<Thing>('a')(thing)).toBe(true)
      expect(has<Thing>('b')(thing)).toBe(false)
      expect(has<Thing>('c')(thing)).toBe(true)
    })

    test('should check if a key exists for dictionary', () => {
      const thing: Dictionary<number | undefined> = { a: 1, b: undefined }

      expect(has<Dictionary<number | undefined>>('a')(thing)).toBe(true)
      expect(has<Dictionary<number | undefined>>('b')(thing)).toBe(true)
      expect(has<Dictionary<number | undefined>>('c')(thing)).toBe(false)
    })
  })
})
