import { List } from '../list'
import { Fn } from '../../function'
import { OptionalTuple, zipNonMatching } from './zipNonMatching'
import { curry2 } from '../../util/curry'

const curried = curry2(zipNonMatching)

function overloaded<L, R>(left: List<L>, right: List<R>): List<OptionalTuple<L, R>>
function overloaded<L, R>(right: List<R>): Fn<List<L>, List<OptionalTuple<L, R>>>
function overloaded<L, R>(
  left_right: List<L> | List<R>,
  right?: List<R>
): List<OptionalTuple<L, R>> | Fn<List<L>, List<OptionalTuple<L, R>>> {
  return curried<L, R>(left_right, right)
}

export { overloaded as zipNonMatching }
