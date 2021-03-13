import { zip as _zip } from 'lodash'
import { List, Tuple } from './list'
import { curry2 } from '../util/curry'
import { Fn } from '../function'
import { Maybe } from '../util'

type OptionalTuple<L, R> = Tuple<Maybe<L>, Maybe<R>>

const zipImpl = curry2(<L, R>(left: List<L>, right: List<R>): List<OptionalTuple<L, R>> => _zip(left, right))

export function zipNonMatching<L, R>(left: List<L>, right: List<R>): List<OptionalTuple<L, R>>
export function zipNonMatching<L, R>(right: List<R>): Fn<List<L>, List<OptionalTuple<L, R>>>
export function zipNonMatching<L, R>(
  left_right: List<L> | List<R>,
  right?: List<R>
): List<OptionalTuple<L, R>> | Fn<List<L>, List<OptionalTuple<L, R>>> {
  return zipImpl<L, R>(left_right, right)
}
