import { sortBy } from './sortBy'
import { identity } from '../function'

describe('sortBy', () => {
  test('should sort empty list', () => {
    expect(sortBy([], identity)).toEqual([])
  })

  test('should sort by value', () => {
    expect(sortBy([2, 3, 1], identity)).toEqual([1, 2, 3])
  })

  describe('objects', () => {
    let users: { name: string; age: number }[]

    beforeEach(() => {
      users = [
        { name: 'fred', age: 48 },
        { name: 'barney', age: 36 },
        { name: 'fred', age: 40 },
        { name: 'barney', age: 34 },
      ]
    })

    test('should sort by single value', () => {
      expect(sortBy(users, user => user.name)).toEqual([
        { name: 'barney', age: 36 },
        { name: 'barney', age: 34 },
        { name: 'fred', age: 48 },
        { name: 'fred', age: 40 },
      ])
    })

    test('should sort by multiple values', () => {
      expect(sortBy(users, user => [user.name, user.age])).toEqual([
        { name: 'barney', age: 34 },
        { name: 'barney', age: 36 },
        { name: 'fred', age: 40 },
        { name: 'fred', age: 48 },
      ])
    })
  })
})
