import { Collection, Predicate, Tx } from '../types'
import { asList } from '../util'

export function every<T>(collection: Collection<T>, p: Predicate<T>): boolean
export function every<T>(p: Predicate<T>): Tx<Collection<T>, boolean>
export function every<T>(
  collection_p: Collection<T> | Predicate<T>,
  p?: Predicate<T>
): boolean | Tx<Collection<T>, boolean> {
  if (p) {
    return asList(collection_p as Collection<T>).every(p)
  } else {
    const p = collection_p as Predicate<T>
    return (collection: Collection<T>): boolean => asList(collection).every(p)
  }
}