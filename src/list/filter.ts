import { Predicate, Fn } from '../types'
import { List } from './list'
import { curry2 } from '../curry'

const filterImpl = curry2(<T>(list: List<T>, p: Predicate<T>): List<T> => list.filter(p))

/**
 * Filters the collection by keeping all items which satisfy the predicate
 * @param list The [[List]]
 * @param p The [[Predicate]]
 * @return A new list with items that satisfies the predicate
 */
export function filter<T>(list: List<T>, p: Predicate<T>): List<T>
export function filter<T>(p: Predicate<T>): Fn<List<T>>
export function filter<T>(list_p: List<T> | Predicate<T>, p?: Predicate<T>): List<T> | Fn<List<T>> {
  return filterImpl(list_p, p)
}
