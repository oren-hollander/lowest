import { List } from '../list'
import { Fn } from '../../function'
import { SortValue } from './sortBy'
import { sortBy } from './sortBy'
import { curry2 } from '../../util/util'

const curried = curry2(sortBy)

/**
 * Sort a list
 * @template T The list item type
 * @param list A list
 * @param by A function returning a sort value for a given item
 * The list is sorted by the value return from ```by```. In case by returns an array of values,
 * the list is primarily sorted by the 1st value, secondarily sorted by the 2nd value and so on
 */
function overloaded<T>(list: List<T>, by: SortValue<T>): List<T>
function overloaded<T>(sortValue: SortValue<T>): Fn<List<T>>
function overloaded<T>(list_sortValue: List<T> | SortValue<T>, sortValue?: SortValue<T>): List<T> | Fn<List<T>> {
  return curried(list_sortValue, sortValue)
}

export { overloaded as sortBy }
