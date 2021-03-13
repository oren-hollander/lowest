import { Key, List } from '../list'
import { Fn } from '../../function'
import { groupBy, Grouped } from './groupBy'
import { curry2 } from '../../util/util'

const curried = curry2(groupBy)

/**
 * Group a list into a dictionary of lists
 * @template T The list and dictionary item type
 * @param list A list
 * @param by A function producing a ```string``` key to group by
 * @return A dictionary with keys returned from ```by``` and lists of corresponding items from ```list```
 * The order in each group is the order of the items in ```list```
 */
function overloaded<T>(list: List<T>, by: Key<T>): Grouped<T>
function overloaded<T>(by: Key<T>): Fn<List<T>, Grouped<T>>
function overloaded<T>(list_by: List<T> | Key<T>, by?: Key<T>): Grouped<T> | Fn<List<T>, Grouped<T>> {
  return curried(list_by, by)
}

export { overloaded as groupBy }
