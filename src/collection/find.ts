import { Collection, Maybe, Predicate, Fn } from '../types'
import { isList } from '../util'
import { values } from '../dictionary'
import { curry2 } from '../curry'

const findImpl = curry2(
  <T>(col: Collection<T>, p: Predicate<T>): Maybe<T> => (isList(col) ? col.find(p) : values(col).find(p))
)

export function find<T>(col: Collection<T>, p: Predicate<T>): Maybe<T>
export function find<T>(p: Predicate<T>): Fn<Collection<T>, Maybe<T>>
export function find<T>(col_p: Collection<T> | Predicate<T>, p?: Predicate<T>): Maybe<T> | Fn<Collection<T>, Maybe<T>> {
  return findImpl(col_p, p)
}
