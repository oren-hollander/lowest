import { Fn } from '../../function'
import { Key, List } from '../list'
import { Dictionary } from '../../dictionary'
import { keyBy } from './keyBy'
import { curry2 } from '../../util/util'

const curried = curry2(keyBy)

function overloaded<T>(list: List<T>, by: Key<T>): Dictionary<T>
function overloaded<T>(by: Key<T>): Fn<List<T>, Dictionary<T>>
function overloaded<T>(list_by: List<T> | Key<T>, by?: Key<T>): Dictionary<T> | Fn<List<T>, Dictionary<T>> {
  return curried(list_by, by)
}

export { overloaded as keyBy }
