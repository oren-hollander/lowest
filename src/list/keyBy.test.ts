import { keyBy } from './keyBy'

describe('keyBy', () => {
  test('should return the first element', () => {
    expect(keyBy([6.1, 4.2, 6.3], x => `${Math.floor(x)}`)).toEqual({ '4': 4.2, '6': 6.3 })
  })

  test('should return the first element', () => {
    expect(keyBy((x: number) => `${Math.floor(x)}`)([6.1, 4.2, 6.3])).toEqual({ '4': 4.2, '6': 6.3 })
  })
})
