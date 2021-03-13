import { List, Tuple } from '../list'
import { Fn } from '../../function'
import { zip } from './zip'
import { curry2 } from '../../util/util'

const curried = curry2(zip)

function overloaded<L, R>(left: List<L>, right: List<R>): List<Tuple<L, R>>
function overloaded<L, R>(right: List<R>): Fn<List<L>, List<Tuple<L, R>>>
function overloaded<L, R>(
  left_right: List<L> | List<R>,
  right?: List<R>
): List<Tuple<L, R>> | Fn<List<L>, List<Tuple<L, R>>> {
  return curried<L, R>(left_right, right)
}

export { overloaded as zip }
