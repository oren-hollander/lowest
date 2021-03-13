import { List } from '../list'
import { Fn } from '../../function'
import { map } from './map'
import { curry2 } from '../../util/util'

const curried = curry2(map)
/**
 * Transform all items of a list
 * @template I The input type.
 * @template O The output type.
 * @param list The list to map over.
 * @param f The transform function.
 * @return The transformed list
 */
export function overloaded<I, O>(list: List<I>, f: Fn<I, O>): List<O>

export function overloaded<I, O>(f: Fn<I, O>): Fn<List<I>, List<O>>

export function overloaded<I, O>(list_f: List<I> | Fn<I, O>, f?: Fn<I, O>): List<O> | Fn<List<I>, List<O>> {
  return curried(list_f, f)
}

export { overloaded as map }
