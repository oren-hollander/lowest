import { Collection } from '../collection'
import { Fn, Predicate } from '../../function'
import { every } from './every'
import { curry2 } from '../../util/curry'

const curried = curry2(every)

/**
 * Check if every item in this collection passes the predicate check
 * @param col The [[Collection]] to check
 * @param p The [[Predicate]]
 */
function overloaded<T>(col: Collection<T>, p: Predicate<T>): boolean
function overloaded<T>(p: Predicate<T>): Fn<Collection<T>, boolean>
function overloaded<T>(col_p: Collection<T> | Predicate<T>, p?: Predicate<T>): boolean | Fn<Collection<T>, boolean> {
  return curried(col_p, p)
}

export { overloaded as every }
