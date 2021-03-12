import { Collection, Predicate, Fn } from '../types'
import { asList } from '../util'
import { curry2 } from '../curry'

const everyImpl = curry2(<T>(col: Collection<T>, p: Predicate<T>): boolean => asList(col).every(p))
/**
 * Check if every item in this collection passes the predicate check
 * @param col The [[Collection]] to check
 * @param p The [[Predicate]]
 */
export function every<T>(col: Collection<T>, p: Predicate<T>): boolean
export function every<T>(p: Predicate<T>): Fn<Collection<T>, boolean>
export function every<T>(col_p: Collection<T> | Predicate<T>, p?: Predicate<T>): boolean | Fn<Collection<T>, boolean> {
  return everyImpl(col_p, p)
}
