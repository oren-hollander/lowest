import { flatMap } from '.'

describe('flatMap', () => {
  const xs = [1, 2, 3]

  test('non curried overload should map', () => {
    expect(flatMap(xs, x => [x, x])).toEqual([1, 1, 2, 2, 3, 3])
  })

  test('curried version should map', () => {
    expect(flatMap((x: number) => [x, x])(xs)).toEqual([1, 1, 2, 2, 3, 3])
  })
})
