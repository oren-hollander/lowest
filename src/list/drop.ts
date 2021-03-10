import { Hx, List } from '../types'

const dropImpl = <T>(list: List<T>, size: number): List<T> => {
  if (size < 0) {
    throw new Error('size must be a non negative number')
  } else if (size === 0) {
    return list
  } else {
    return list.slice(size)
  }
}

export function drop<T>(list: List<T>, size: number): List<T>
export function drop<T>(size: number): Hx<List<T>>
export function drop<T>(list_size: List<T> | number, size?: number): List<T> | Hx<List<T>> {
  if (size !== undefined) {
    const list = list_size as List<T>
    return dropImpl(list, size)
  } else {
    const size = list_size as number
    return (list: List<T>): List<T> => dropImpl(list, size)
  }
}
