import { Fn } from '../types'
import { List } from './list'
import { curry2 } from '../curry'

const concatImpl = curry2(<T>(toList: List<T>, list: List<T>): List<T> => toList.concat(list))

export function concat<T>(toList: List<T>, list: List<T>): List<T>
export function concat<T>(list: List<T>): Fn<List<T>>
export function concat<T>(toList_list: List<T>, list?: List<T>): List<T> | Fn<List<T>> {
  return concatImpl(toList_list, list)
}
