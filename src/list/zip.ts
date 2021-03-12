import { Fn, List, Tuple } from '../types'
import { zip as _zip } from 'lodash'
import { take } from './take'

const zipValues = <L, R>(left: List<L>, right: List<R>): List<Tuple<L, R>> => {
  const commonLength = Math.min(left.length, right.length)
  return _zip(take(left, commonLength), take(right, commonLength)) as List<Tuple<L, R>>
}

export function zip<L, R>(left: List<L>, right: List<R>): List<Tuple<L, R>>
export function zip<L, R>(left: List<L>): Fn<List<R>, List<Tuple<L, R>>>
export function zip<L, R>(left: List<L>, right?: List<R>): List<Tuple<L, R>> | Fn<List<R>, List<Tuple<L, R>>> {
  if (right) {
    return zipValues(left, right)
  } else {
    return (right: List<R>): List<Tuple<L, R>> => zipValues(left, right)
  }
}
