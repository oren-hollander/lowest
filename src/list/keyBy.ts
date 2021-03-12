import { keyBy as _keyBy } from 'lodash'
import { Dictionary, Fn, List } from '../types'

type Key<T> = Fn<T, string>

export function keyBy<T>(list: List<T>, by: Key<T>): Dictionary<T>
export function keyBy<T>(by: Key<T>): Fn<List<T>, Dictionary<T>>
export function keyBy<T>(list_by: List<T> | Key<T>, by?: Key<T>): Dictionary<T> | Fn<List<T>, Dictionary<T>> {
  if (by) {
    return _keyBy(list_by, by)
  } else {
    return (list: List<T>): Dictionary<T> => _keyBy(list, list_by as Key<T>)
  }
}
