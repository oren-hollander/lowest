import { Collection } from '../collection'
import { Fn, Predicate } from '../../function'
import { some } from './some'
import { curry2 } from '../../util/curry'

const curried = curry2(some)

/**
 * Check if some items in this collection satisfies a predicate
 * @template T The [[Collection]] item type
 * @param col A [[Collection]] to check
 * @param p A [[Predicate]]
 * @return true if some items in this collection satisfies the predicate and false otherwise
 */
function overloaded<T>(col: Collection<T>, p: Predicate<T>): boolean

/**
 * Check if every item in this collection satisfies a predicate
 * @template T The [[Collection]] item type
 * @param p A [[Predicate]]
 * @return A function accepting a collection and returning true if some item in this collection satisfies the
 * predicate and false otherwise
 */
function overloaded<T>(p: Predicate<T>): Fn<Collection<T>, boolean>
function overloaded<T>(col_p: Collection<T> | Predicate<T>, p?: Predicate<T>): boolean | Fn<Collection<T>, boolean> {
  return curried(col_p, p)
}

export { overloaded as some }
