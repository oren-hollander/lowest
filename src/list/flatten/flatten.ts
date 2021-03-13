import { List } from '../list'
import { flatten as _flatten } from 'lodash'

/**
 * Flatten a list of lists
 * @template T the list item type
 * @param list A list of lists
 * @return A new flattened list where all items of lists in lists are concatenated
 */
export const flatten = <T>(list: List<List<T>>): List<T> => _flatten(list)
