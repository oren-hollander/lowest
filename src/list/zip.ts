import { Fn, List } from '../types'
import { zip as _zip, isUndefined } from 'lodash'

type Tuple<L, R> = [L, R]
type OptionalTuple<L, R> = Tuple<L | undefined, R | undefined>

export function zip<L, R>(left: List<L>, right: List<R>, iaSizeEqual: true): List<Tuple<L, R>>
export function zip<L, R>(left: List<L>, right: List<R>, iaSizeEqual?: false): List<OptionalTuple<L, R>>
export function zip<L, R>(left: List<L>, iaSizeEqual: true): Fn<List<R>, List<Tuple<L, R>>>
export function zip<L, R>(left: List<L>, iaSizeEqual?: false): Fn<List<R>, List<OptionalTuple<L, R>>>
export function zip<L, R>(
  left: List<L>,
  right_isEqualSize?: List<R> | boolean,
  isEqualSize?: boolean
): List<[L | undefined, R | undefined]> | Fn<List<R>, List<[L | undefined, R | undefined]>> {
  if (!isUndefined(right_isEqualSize && !isUndefined(isEqualSize))) {
    const right = right_isEqualSize as List<R>
    return _zip(left, right) as List<OptionalTuple<L, R>>
  } else if (!isUndefined(right_isEqualSize)) {
    if (right_isEqualSize !== true) {
      const right = right_isEqualSize as List<R>
      return _zip(left, right)
    } else {
      return (right: List<R>) => _zip(left, right)
    }
  } else {
    return (right: List<R>) => _zip(left, right)
  }
}
