import { toPairs } from '../toPairs'
import { flow } from '../../function'
import { List, map } from '../../list'
import { Dictionary, getEntryValue } from '../dictionary'

/**
 * Returns the values of a dictionary
 * @template T The type of the dictionary item
 * @param dict A dictionary
 * @return A list of the dictionary values
 */
export const values = <T>(dict: Dictionary<T>): List<T> => flow(dict, toPairs, map(getEntryValue))
