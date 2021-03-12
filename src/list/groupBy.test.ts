import { groupBy } from './groupBy'

describe('groupBy', () => {
  test('should group numbers', () => {
    expect(groupBy([6.1, 4.2, 6.3], x => `${Math.floor(x)}`)).toEqual({ '4': [4.2], '6': [6.1, 6.3] })
  })

  test('should return the first element', () => {
    expect(groupBy((x: number) => `${Math.floor(x)}`)([6.1, 4.2, 6.3])).toEqual({ '4': [4.2], '6': [6.1, 6.3] })
  })
})
