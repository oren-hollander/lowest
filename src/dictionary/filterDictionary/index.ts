import { Dictionary } from '../dictionary'
import { Fn, Predicate } from '../../function'
import { filterDictionary as impl } from './filterDictionary'
import { curry2 } from '../../util/curry'

const curried = curry2(impl)

/**
 * Returns a new dictionary containing entries who's values satisfies the predicate
 * @param dict The [[Dictionary]]
 * @param p The [[Predicate]]
 * @return A new, filtered [[Dictionary]]
 */
export function filterDictionary<T>(dict: Dictionary<T>, p: Predicate<T>): Dictionary<T>

/**
 * The curried version of the ```filteredDictionary```
 * @param p The [[Predicate]]
 * @return A function accepting a dictionary and returning a filtered dictionary
 */
export function filterDictionary<T>(p: Predicate<T>): Fn<Dictionary<T>>

export function filterDictionary<T>(
  dict_p: Dictionary<T> | Predicate<T>,
  p?: Predicate<T>
): Dictionary<T> | Fn<Dictionary<T>> {
  return curried(dict_p, p)
}
