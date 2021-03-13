import { overPairValues, transformDictionary } from '../util/util'
import { curry2 } from '../util/curry'
import { Fn, Predicate } from '../function'
import { Dictionary } from './dictionary'

const filterImpl = curry2(
  <T>(dict: Dictionary<T>, p: Predicate<T>): Dictionary<T> =>
    transformDictionary(dict, values => values.filter(overPairValues(p)))
)

export function filterDictionary<T>(dict: Dictionary<T>, p: Predicate<T>): Dictionary<T>
export function filterDictionary<T>(p: Predicate<T>): Fn<Dictionary<T>>
export function filterDictionary<T>(
  dict_p: Dictionary<T> | Predicate<T>,
  p?: Predicate<T>
): Dictionary<T> | Fn<Dictionary<T>> {
  return filterImpl(dict_p, p)
}
