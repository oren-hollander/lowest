import { values } from '../dictionary'
import { curry2 } from '../util/curry'
import { Fn, Predicate } from '../function'
import { Collection } from './collection'
import { isList } from '../list/list'
import { Maybe } from '../util'

const findImpl = curry2(
  <T>(col: Collection<T>, p: Predicate<T>): Maybe<T> => (isList(col) ? col.find(p) : values(col).find(p))
)

export function find<T>(col: Collection<T>, p: Predicate<T>): Maybe<T>
export function find<T>(p: Predicate<T>): Fn<Collection<T>, Maybe<T>>
export function find<T>(col_p: Collection<T> | Predicate<T>, p?: Predicate<T>): Maybe<T> | Fn<Collection<T>, Maybe<T>> {
  return findImpl(col_p, p)
}
