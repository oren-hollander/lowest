import { List } from './list'
import { curry2 } from '../util/curry'
import { Fn } from '../function'

type LL<T> = List<List<T>>

const chunkImpl = curry2(
  <T>(list: List<T>, size: number): LL<T> => {
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
)

export function chunk<T>(list: List<T>, size: number): LL<T>
export function chunk<T>(size: number): Fn<List<T>, LL<T>>
export function chunk<T>(list_size: List<T> | number, size?: number): LL<T> | Fn<List<T>, LL<T>> {
  return chunkImpl(list_size, size)
}
