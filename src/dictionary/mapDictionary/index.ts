import { Dictionary } from '../dictionary'
import { Fn } from '../../function'
import { mapDictionary } from './mapDictionary'
import { curry2 } from '../../util/util'

const curried = curry2(mapDictionary)

/**
 * [[Dictionary]] map
 * @template I The element type of the input dictionary.
 * @template O The element type of the transformed dictionary.
 * @param dict The dictionary to transform.
 * @param f A transform function.
 * @return A transformed dictionary
 */
function overloaded<I, O>(dict: Dictionary<I>, f: Fn<I, O>): Dictionary<O>

/**
 * Curried [[Dictionary]] map
 * @template I The element type of the input dictionary.
 * @template O The element type of the transformed dictionary.
 * @param f A transform function.
 * @return A function that accepts a dictionary and returns a transformed dictionary
 */
function overloaded<I, O>(f: Fn<I, O>): Fn<Dictionary<I>, Dictionary<O>>

function overloaded<I, O>(
  dict_f: Dictionary<I> | Fn<I, O>,
  f?: Fn<I, O>
): Dictionary<O> | Fn<Dictionary<I>, Dictionary<O>> {
  return curried(dict_f, f)
}

export { overloaded as mapDictionary }
