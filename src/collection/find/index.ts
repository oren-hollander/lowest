import { Collection } from '../collection'
import { Fn, Predicate } from '../../function'
import { Maybe } from '../../util'
import { find } from './find'
import { curry2 } from '../../util/util'

const curried = curry2(find)

/**
 * Find if an item exists in a collection
 * @template T The type of the collection item
 * @param col A [[Collection]]
 * @param p A [[Predicate]]
 * @return The first item that satisfies the predicate or undefined if no item satisfies the predicate
 * In case that the collection is a [[Dictionary]], the entries are not ordered so if more than one
 * item satisfies the predicate an arbitrary one will be returned
 */
function overloaded<T>(col: Collection<T>, p: Predicate<T>): Maybe<T>

/**
 * The curried version of ```find```
 * @template T The type of the collection item
 * @param p A [[Predicate]]
 * @return A function accepting a collection and optionally  returning an item
 */
function overloaded<T>(p: Predicate<T>): Fn<Collection<T>, Maybe<T>>

function overloaded<T>(col_p: Collection<T> | Predicate<T>, p?: Predicate<T>): Maybe<T> | Fn<Collection<T>, Maybe<T>> {
  return curried(col_p, p)
}

export { overloaded as find }
