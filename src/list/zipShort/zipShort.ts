import { zip as _zip } from 'lodash'
import { take } from '../take/take'
import { List, Tuple } from '../list'

export const zipShort = <L, R>(left: List<L>, right: List<R>): List<Tuple<L, R>> => {
  const commonLength = Math.min(left.length, right.length)
  return _zip(take(left, commonLength), take(right, commonLength)) as List<Tuple<L, R>>
}
