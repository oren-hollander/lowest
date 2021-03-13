import { drop } from '../drop/drop'
import { List } from '../list'

/**
 * Returns the tail of the list
 * @template T the list item type
 * @param list A list
 * @return All but the first item in a list
 */
export const tail = <T>(list: List<T>): List<T> => drop(list, 1)
