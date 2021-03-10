import { List, LL, Func } from '../types'

const chunkImpl = <T>(size: number, list: List<T>): LL<T> => {
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

export function chunk<T>(list: List<T>, size: number): LL<T>
export function chunk<T>(size: number): Func<List<T>, LL<T>>
export function chunk<T>(list_size: List<T> | number, size?: number): LL<T> | Func<List<T>, LL<T>> {
  if (size !== undefined) {
    const list = list_size as List<T>
    return chunkImpl(size, list)
  } else {
    const size = list_size as number
    return (list: List<T>): LL<T> => chunkImpl(size, list)
  }
}
