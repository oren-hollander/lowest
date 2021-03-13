import { List } from '../list'
import { Fn } from '../../function'
import { flatMap } from './flatMap'
import { curry2 } from '../../util/util'

const curried = curry2(flatMap)

/**
 * Transform and flatten a list
 * @template I the input list item type
 * @template O the output list item type
 * @param list A list
 * @param f A transform function from ```I``` to ```O```
 * @return A new list where all items have been transformed by ```f``` and then flattened
 */
function overloaded<I, O>(list: List<I>, f: Fn<I, List<O>>): List<O>
function overloaded<I, O>(f: Fn<I, List<O>>): Fn<List<I>, List<O>>
function overloaded<I, O>(list_f: List<I> | Fn<I, List<O>>, f?: Fn<I, List<O>>): List<O> | Fn<List<I>, List<O>> {
  return curried(list_f, f)
}

export { overloaded as flatMap }
