import { flow } from './flow'
import { map } from '../list'
import { update } from '../object'

describe('flow', () => {
  test('should apply all operations in the flow for list of numbers', () => {
    expect(
      flow(
        [1, 22, 999],
        map(x => x + 1),
        map(x => `${x}${x}`),
        map(x => x.length),
        map(x => x * 2)
      )
    ).toEqual([4, 8, 16])
  })

  test('should apply all operations in the flow for list of objects', () => {
    expect(
      flow(
        [
          { a: 1, b: 'x' },
          { a: 2, b: 'y' }
        ],
        map(update('a', x => x + 1)),
        map(update('b', x => `${x}-${x}`))
      )
    ).toEqual([
      { a: 2, b: 'x-x' },
      { a: 3, b: 'y-y' }
    ])
  })

  test('should apply all operations in the flow for object', () => {
    expect(
      flow(
        { a: 1, b: 'x' },
        update('a', x => x + 1),
        update('b', x => `${x}-${x}`)
      )
    ).toEqual({ a: 2, b: 'x-x' })
  })
})
