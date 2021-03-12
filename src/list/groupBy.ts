import { groupBy as _groupBy } from 'lodash'
import { Dictionary, Fn, List } from '../types'

type Grouped<T> = Dictionary<List<T>>
type Key<T> = Fn<T, string>

export function groupBy<T>(list: List<T>, by: Key<T>): Grouped<T>
export function groupBy<T>(by: Key<T>): Fn<List<T>, Grouped<T>>
export function groupBy<T>(list_by: List<T> | Key<T>, by?: Key<T>): Grouped<T> | Fn<List<T>, Grouped<T>> {
  if (by) {
    return _groupBy(list_by, by)
  } else {
    return (list: List<T>): Grouped<T> => _groupBy(list, list_by as Key<T>)
  }
}
