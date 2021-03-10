import { Collection, Dictionary, List, Maybe, Predicate, Func } from '../types'
import { isList } from '../util'
import { values } from '../dictionary'

const filterCollection = <T>(collection: Collection<T>, p: Predicate<T>): Maybe<T> =>
  isList(collection) ? collection.find(p) : values(collection).find(p)

export function find<T>(list: List<T>, p: Predicate<T>): Maybe<T>
export function find<T>(dict: Dictionary<T>, p: Predicate<T>): Maybe<T>
export function find<T>(p: Predicate<T>): (collection: Collection<T>) => Maybe<T>
export function find<T>(
  list_dict_p: Collection<T> | Predicate<T>,
  p?: Predicate<T>
): Maybe<T> | Func<Collection<T>, Maybe<T>> {
  if (p) {
    return filterCollection(list_dict_p as Collection<T>, p)
  } else {
    const p = list_dict_p as Predicate<T>
    return (collection: Collection<T>) => filterCollection(collection, p)
  }
}
