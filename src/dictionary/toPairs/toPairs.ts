import { List } from '../../list'
import { Dictionary, Entry } from '../dictionary'

/**
 * Returns a list of dictionary entries
 * @template T The type of the dictionary item
 * @param dict A dictionary
 * @return A list of entries
 */
export const toPairs = <T>(dict: Dictionary<T>): List<Entry<T>> => Object.entries(dict)
