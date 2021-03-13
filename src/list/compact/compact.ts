import { filter } from '../filter/filter'
import { List } from '../list'
import { isNotNil, Nilable } from '../../util/util'

/**
 * Returns a list with null or undefined items removed
 * @param list The [[List]] to remove from
 * @return A new list without null or undefined items
 */
export const compact = <T>(list: List<Nilable<T>>): List<T> => filter(list, isNotNil) as List<T>
