import { sortBy as _sortBy } from 'lodash'
import { Fn } from '../types'
import { List } from './list'
import { curry2 } from '../curry'

type SortValue<T> = Fn<T, unknown | List<unknown>>

const sortByImpl = curry2(<T>(list: List<T>, sortValue: SortValue<T>): List<T> => _sortBy(list, sortValue))

export function sortBy<T>(list: List<T>, by: SortValue<T>): List<T>
export function sortBy<T>(sortValue: SortValue<T>): Fn<List<T>>
export function sortBy<T>(list_sortValue: List<T> | SortValue<T>, sortValue?: SortValue<T>): List<T> | Fn<List<T>> {
  return sortByImpl(list_sortValue, sortValue)
}
