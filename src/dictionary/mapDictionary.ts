import { overPairs, transformDictionary } from '../util/util'
import { curry2 } from '../util/curry'
import { Fn } from '../function'
import { Dictionary } from './dictionary'

const mapImpl = curry2(
  <I, O>(dict: Dictionary<I>, f: Fn<I, O>): Dictionary<O> =>
    transformDictionary(dict, values => values.map(overPairs(f)))
)

/**
 * [[Dictionary]] map
 * @template I The input type.
 * @template O The output type.
 * @param dict The dictionary to map over.
 * @param f The transform function.
 * @return The transformed dictionary
 */
export function mapDictionary<I, O>(dict: Dictionary<I>, f: Fn<I, O>): Dictionary<O>

/**
 * Curried [[Collection]] map
 * @template I The input type.
 * @template O The output type.
 * @param f The transform function.
 * @return The {@link Map} function that accepts the collection
 */
export function mapDictionary<I, O>(f: Fn<I, O>): Fn<Dictionary<I>, Dictionary<O>>

export function mapDictionary<I, O>(
  dict_f: Dictionary<I> | Fn<I, O>,
  f?: Fn<I, O>
): Dictionary<O> | Fn<Dictionary<I>, Dictionary<O>> {
  return mapImpl(dict_f, f)
}
