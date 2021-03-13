import { Dictionary } from '../dictionary'
import { Fn } from '../../function'
import { mapDictionary } from './mapDictionary'
import { curry2 } from '../../util/curry'

const curried = curry2(mapDictionary)

/**
 * [[Dictionary]] map
 * @template I The input type.
 * @template O The output type.
 * @param dict The dictionary to map over.
 * @param f The transform function.
 * @return The transformed dictionary
 */
function overloaded<I, O>(dict: Dictionary<I>, f: Fn<I, O>): Dictionary<O>

/**
 * Curried [[Collection]] map
 * @template I The input type.
 * @template O The output type.
 * @param f The transform function.
 * @return The {@link Map} function that accepts the collection
 */
function overloaded<I, O>(f: Fn<I, O>): Fn<Dictionary<I>, Dictionary<O>>

function overloaded<I, O>(
  dict_f: Dictionary<I> | Fn<I, O>,
  f?: Fn<I, O>
): Dictionary<O> | Fn<Dictionary<I>, Dictionary<O>> {
  return curried(dict_f, f)
}

export { overloaded as mapDictionary }
