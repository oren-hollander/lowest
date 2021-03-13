import { Key, List } from '../list'
import { Fn } from '../../function'
import { groupBy, Grouped } from './groupBy'
import { curry2 } from '../../util/util'

const curried = curry2(groupBy)

function overloaded<T>(list: List<T>, by: Key<T>): Grouped<T>
function overloaded<T>(by: Key<T>): Fn<List<T>, Grouped<T>>
function overloaded<T>(list_by: List<T> | Key<T>, by?: Key<T>): Grouped<T> | Fn<List<T>, Grouped<T>> {
  return curried(list_by, by)
}

export { overloaded as groupBy }
