import { Dictionary } from '../dictionary'
import { Fn, Predicate } from '../../function'
import { filterDictionary } from './filterDictionary'
import { curry2 } from '../../util/curry'

const curried = curry2(filterDictionary)

/**
 * Returns a new dictionary containing entries who's values satisfies the predicate
 * @param dict The [[Dictionary]]
 * @param p The [[Predicate]]
 * @return A new, filtered [[Dictionary]]
 */
function overloaded<T>(dict: Dictionary<T>, p: Predicate<T>): Dictionary<T>

/**
 * The curried version of the ```filteredDictionary```
 * @param p The [[Predicate]]
 * @return A function accepting a dictionary and returning a filtered dictionary
 */
function overloaded<T>(p: Predicate<T>): Fn<Dictionary<T>>

function overloaded<T>(dict_p: Dictionary<T> | Predicate<T>, p?: Predicate<T>): Dictionary<T> | Fn<Dictionary<T>> {
  return curried(dict_p, p)
}

export { overloaded as filterDictionary }
