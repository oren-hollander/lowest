import { List } from '../list'
import { Fn } from '../../function'
import { flatMap } from './flatMap'
import { curry2 } from '../../util/util'

const curried = curry2(flatMap)

function overloaded<I, O>(list: List<I>, f: Fn<I, List<O>>): List<O>
function overloaded<I, O>(f: Fn<I, List<O>>): Fn<List<I>, List<O>>
function overloaded<I, O>(list_f: List<I> | Fn<I, List<O>>, f?: Fn<I, List<O>>): List<O> | Fn<List<I>, List<O>> {
  return curried(list_f, f)
}

export { overloaded as flatMap }
