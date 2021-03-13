import { sortBy as _sortBy } from 'lodash'
import { List } from '../list'
import { Fn } from '../../function'

export type SortValue<T> = Fn<T, unknown | List<unknown>>

export const sortBy = <T>(list: List<T>, sortValue: SortValue<T>): List<T> => _sortBy(list, sortValue)
