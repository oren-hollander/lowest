import { List } from '../list'
import { Fn } from '../../function'
import { SortValue } from './sortBy'
import { sortBy } from './sortBy'
import { curry2 } from '../../util/curry'

const curried = curry2(sortBy)

function overloaded<T>(list: List<T>, by: SortValue<T>): List<T>
function overloaded<T>(sortValue: SortValue<T>): Fn<List<T>>
function overloaded<T>(list_sortValue: List<T> | SortValue<T>, sortValue?: SortValue<T>): List<T> | Fn<List<T>> {
  return curried(list_sortValue, sortValue)
}

export { overloaded as sortBy }
