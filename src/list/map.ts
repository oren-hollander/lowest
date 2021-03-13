import { List } from './list'
import { curry2 } from '../util/curry'
import { Fn } from '../function'

const mapImpl = curry2(<I, O>(list: List<I>, f: Fn<I, O>): List<O> => list.map(f))
/**
 * * [[List]] map
 * @template I The input type.
 * @template O The output type.
 * @param list The list to map over.
 * @param f The transform function.
 * @return The transformed list
 */
export function map<I, O>(list: List<I>, f: Fn<I, O>): List<O>

/**
 * Curried [[Collection]] map
 * @template I The input type.
 * @template O The output type.
 * @param f The transform function.
 * @return The {@link Map} function that accepts the collection
 */
export function map<I, O>(f: Fn<I, O>): Fn<List<I>, List<O>>

export function map<I, O>(list_f: List<I> | Fn<I, O>, f?: Fn<I, O>): List<O> | Fn<List<I>, List<O>> {
  return mapImpl(list_f, f)
}
