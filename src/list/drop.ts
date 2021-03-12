import { Fn } from '../types'
import { List } from './list'
import { curry2 } from '../curry'

const dropImpl = curry2(
  <T>(list: List<T>, size: number): List<T> => {
    if (size < 0) {
      throw new Error('size must be a non negative number')
    } else if (size === 0) {
      return list
    } else {
      return list.slice(size)
    }
  }
)

export function drop<T>(list: List<T>, size: number): List<T>
export function drop<T>(size: number): Fn<List<T>>
export function drop<T>(list_size: List<T> | number, size?: number): List<T> | Fn<List<T>> {
  return dropImpl(list_size, size)
}
