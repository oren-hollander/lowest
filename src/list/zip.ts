import { zip as _zip } from 'lodash'
import { take } from './take'
import { List, Tuple } from './list'
import { curry2 } from '../util/curry'
import { Fn } from '../function'

const zipImpl = curry2(
  <L, R>(left: List<L>, right: List<R>): List<Tuple<L, R>> => {
    const commonLength = Math.min(left.length, right.length)
    return _zip(take(left, commonLength), take(right, commonLength)) as List<Tuple<L, R>>
  }
)

export function zip<L, R>(left: List<L>, right: List<R>): List<Tuple<L, R>>
export function zip<L, R>(right: List<R>): Fn<List<L>, List<Tuple<L, R>>>
export function zip<L, R>(
  left_right: List<L> | List<R>,
  right?: List<R>
): List<Tuple<L, R>> | Fn<List<L>, List<Tuple<L, R>>> {
  return zipImpl<L, R>(left_right, right)
}
