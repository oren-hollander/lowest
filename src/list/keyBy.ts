import { keyBy as _keyBy } from 'lodash'
import { Dictionary, Fn } from '../types'
import { List } from './list'
import { curry2 } from '../curry'

type Key<T> = Fn<T, string>

const keyByImpl = curry2(<T>(list: List<T>, by: Key<T>): Dictionary<T> => _keyBy(list, by))

export function keyBy<T>(list: List<T>, by: Key<T>): Dictionary<T>
export function keyBy<T>(by: Key<T>): Fn<List<T>, Dictionary<T>>
export function keyBy<T>(list_by: List<T> | Key<T>, by?: Key<T>): Dictionary<T> | Fn<List<T>, Dictionary<T>> {
  return keyByImpl(list_by, by)
}
