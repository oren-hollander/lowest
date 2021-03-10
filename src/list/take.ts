import { Func, List } from '../types'

const takeImpl = <T>(list: List<T>, size: number): List<T> => {
  if (size < 0) {
    throw new Error('size must be a non negative number')
  } else if (size === list.length) {
    return list
  } else {
    return list.slice(0, size)
  }
}

export function take<T>(list: readonly T[], size: number): List<T>
export function take<T>(size: number): Func<List<T>>
export function take<T>(list_size: List<T> | number, size?: number): List<T> | Func<List<T>> {
  if (size !== undefined) {
    const list = list_size as List<T>
    return takeImpl(list, size)
  } else {
    const size = list_size as number
    return (list: List<T>): List<T> => takeImpl(list, size)
  }
}
