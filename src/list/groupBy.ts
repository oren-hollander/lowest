import { groupBy as _groupBy } from 'lodash'
import { List } from './list'
import { curry2 } from '../util/curry'
import { Fn } from '../function'
import { Dictionary } from '../dictionary'

type Grouped<T> = Dictionary<List<T>>
type Key<T> = Fn<T, string>

const groupByImpl = curry2(<T>(list: List<T>, by: Key<T>): Grouped<T> => _groupBy(list, by))

export function groupBy<T>(list: List<T>, by: Key<T>): Grouped<T>
export function groupBy<T>(by: Key<T>): Fn<List<T>, Grouped<T>>
export function groupBy<T>(list_by: List<T> | Key<T>, by?: Key<T>): Grouped<T> | Fn<List<T>, Grouped<T>> {
  return groupByImpl(list_by, by)
}
