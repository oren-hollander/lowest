import { Collection, Maybe, Predicate, Fn } from '../types'
import { isList } from '../util'
import { values } from '../dictionary'

const filterCollection = <T>(col: Collection<T>, p: Predicate<T>): Maybe<T> =>
  isList(col) ? col.find(p) : values(col).find(p)

export function find<T>(col: Collection<T>, p: Predicate<T>): Maybe<T>
export function find<T>(p: Predicate<T>): (collection: Collection<T>) => Maybe<T>
export function find<T>(col_p: Collection<T> | Predicate<T>, p?: Predicate<T>): Maybe<T> | Fn<Collection<T>, Maybe<T>> {
  if (p) {
    const col = col_p as Collection<T>
    return filterCollection(col, p)
  } else {
    const p = col_p as Predicate<T>
    return (col: Collection<T>) => filterCollection(col, p)
  }
}
