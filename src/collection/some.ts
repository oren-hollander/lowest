import { asList } from '../list/list'
import { curry2 } from '../util/curry'
import { Fn, Predicate } from '../function'
import { Collection } from './collection'

const someImpl = curry2(<T>(col: Collection<T>, p: Predicate<T>): boolean => asList(col).some(p))

export function some<T>(collection: Collection<T>, p: Predicate<T>): boolean
export function some<T>(p: Predicate<T>): Fn<Collection<T>, boolean>
export function some<T>(
  collection_p: Collection<T> | Predicate<T>,
  p?: Predicate<T>
): boolean | Fn<Collection<T>, boolean> {
  return someImpl(collection_p, p)
}
