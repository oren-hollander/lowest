import { Collection, Predicate, Tx } from '../types'
import { asList } from '../util'

export function some<T>(collection: Collection<T>, p: Predicate<T>): boolean
export function some<T>(p: Predicate<T>): Tx<Collection<T>, boolean>
export function some<T>(
  collection_p: Collection<T> | Predicate<T>,
  p?: Predicate<T>
): boolean | Tx<Collection<T>, boolean> {
  if (p) {
    return asList(collection_p as Collection<T>).some(p)
  } else {
    const p = collection_p as Predicate<T>
    return (collection: Collection<T>): boolean => asList(collection).some(p)
  }
}