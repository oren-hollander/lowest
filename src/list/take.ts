import { Fn } from '../types'
import { List } from './list'
import { curry2 } from '../curry'

const takeImpl = curry2(
  <T>(list: List<T>, size: number): List<T> => {
    if (size < 0) {
      throw new Error('size must be a non negative number')
    } else if (size === list.length) {
      return list
    } else {
      return list.slice(0, size)
    }
  }
)

export function take<T>(list: List<T>, size: number): List<T>
export function take<T>(size: number): Fn<List<T>>
export function take<T>(list_size: List<T> | number, size?: number): List<T> | Fn<List<T>> {
  return takeImpl(list_size, size)
}
