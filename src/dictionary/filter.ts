import { Dictionary, Predicate, Fn } from '../types'
import { overPairValues, transformDictionary } from '../util'
import { curry2 } from '../curry'

const filterImpl = curry2(
  <T>(dict: Dictionary<T>, p: Predicate<T>): Dictionary<T> =>
    transformDictionary(dict, values => values.filter(overPairValues(p)))
)

export function filter<T>(dict: Dictionary<T>, p: Predicate<T>): Dictionary<T>
export function filter<T>(p: Predicate<T>): Fn<Dictionary<T>>
export function filter<T>(dict_p: Dictionary<T> | Predicate<T>, p?: Predicate<T>): Dictionary<T> | Fn<Dictionary<T>> {
  return filterImpl(dict_p, p)
}
