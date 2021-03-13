import { uniq as _uniq } from 'lodash'
import { List } from '../list'

/**
 * Returns a unique list
 * @template T the list item type
 * @param list A list
 * @return A new list with unique items
 */
export const uniq = <T>(list: List<T>): List<T> => _uniq(list)
