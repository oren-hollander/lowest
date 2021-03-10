import { sortBy as _sortBy } from 'lodash'

import { Collection, Dictionary, List, Tx } from '../types'

type SortBy<T> = {
  (dict: Dictionary<T>): Dictionary<T>
  (list: List<T>): List<T>
}

type SortValue<T> = Tx<T, unknown | List<unknown>>

const sortCollectionBy = <T>(collection: Collection<T>, sortValue: SortValue<T>): Collection<T> =>
  _sortBy(collection, sortValue) as Collection<T>

export function sortBy<T>(list: List<T>, tx: SortValue<T>): List<T>
export function sortBy<T>(dict: Dictionary<T>, tx: SortValue<T>): Dictionary<T>
export function sortBy<T>(sortValue: SortValue<T>): SortBy<T>
export function sortBy<T>(
  collection_sortValue: Collection<T> | SortValue<T>,
  sortValue?: SortValue<T>
): Collection<T> | Tx<Collection<T>> {
  if (sortValue) {
    return sortCollectionBy(collection_sortValue as Collection<T>, sortValue)
  } else {
    const sortValue = collection_sortValue as SortValue<T>
    return (collection: Collection<T>) => sortCollectionBy(collection, sortValue)
  }
}
