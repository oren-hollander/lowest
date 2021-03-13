import { List } from '../list'

export type LL<T> = List<List<T>>

export const chunk = <T>(list: List<T>, size: number): LL<T> => {
  if (size < 1) {
    throw new Error('Chunk size must be a positive number')
  }

  const result: T[][] = []
  let remaining: List<T> = list
  while (remaining.length > 0) {
    result.push(remaining.slice(0, size))
    remaining = remaining.slice(size)
  }
  return result
}
