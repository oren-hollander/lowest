import { Fn, List, Tuple, Maybe } from '../types'
import { zip as _zip } from 'lodash'

type OptionalTuple<L, R> = Tuple<Maybe<L>, Maybe<R>>

export function zipNonMatching<L, R>(left: List<L>, right: List<R>): List<OptionalTuple<L, R>>
export function zipNonMatching<L, R>(left: List<L>): Fn<List<R>, List<OptionalTuple<L, R>>>
export function zipNonMatching<L, R>(
  left: List<L>,
  right?: List<R>
): List<OptionalTuple<L, R>> | Fn<List<R>, List<OptionalTuple<L, R>>> {
  if (right) {
    return _zip(left, right) as List<OptionalTuple<L, R>>
  } else {
    return (right: List<R>): List<OptionalTuple<L, R>> => _zip(left, right)
  }
}
