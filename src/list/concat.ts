import { Fn, List } from '../types'

export function concat<T>(toList: List<T>, list: List<T>): List<T>
export function concat<T>(toList: List<T>): (list: List<T>) => List<T>
export function concat<T>(toList: List<T>, list?: List<T>): List<T> | Fn<List<T>> {
  if (list) {
    return toList.concat(list)
  } else {
    return (list: List<T>): List<T> => toList.concat(list)
  }
}
