import { Collection, Dictionary, List, Predicate, Tx } from '../types'
import { isList, transformDictionary } from '../util'

type Filter<T> = {
  (dict: Dictionary<T>): Dictionary<T>
  (list: List<T>): List<T>
}

const filterCollection = <T>(collection: Collection<T>, p: Predicate<T>): Collection<T> =>
  isList(collection)
    ? collection.filter(p)
    : transformDictionary(collection, values => values.filter(([, value]) => p(value)))

export function filter<T>(list: List<T>, p: Predicate<T>): List<T>
export function filter<T>(dict: Dictionary<T>, p: Predicate<T>): Dictionary<T>
export function filter<T>(p: Predicate<T>): Filter<T>
export function filter<T>(
  list_dict_p: Collection<T> | Predicate<T>,
  p?: Predicate<T>
): Collection<T> | Tx<List<T>> | Tx<Dictionary<T>> {
  if (p) {
    return filterCollection(list_dict_p as Collection<T>, p)
  } else {
    const p = list_dict_p as Predicate<T>
    return (collection: Collection<T>) => filterCollection(collection, p) as List<T> & Dictionary<T>
  }
}
