import { List } from '../list'
import { Fn, Predicate } from '../../function'
import { filter } from './filter'
import { curry2 } from '../../util/util'

const curried = curry2(filter)

/**
 * Filters the collection by keeping all items which satisfy the predicate
 * @param list The [[List]]
 * @param p The [[Predicate]]
 * @return A new list with items that satisfies the predicate
 */
function overloaded<T>(list: List<T>, p: Predicate<T>): List<T>
function overloaded<T>(p: Predicate<T>): Fn<List<T>>
function overloaded<T>(list_p: List<T> | Predicate<T>, p?: Predicate<T>): List<T> | Fn<List<T>> {
  return curried(list_p, p)
}

export { overloaded as filter }
