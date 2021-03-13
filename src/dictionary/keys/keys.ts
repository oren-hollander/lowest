import { toPairs } from '../toPairs'
import { flow } from '../../function'
import { map, List } from '../../list'
import { Dictionary, getEntryKey } from '../dictionary'

/**
 * Returns the keys of the dictionary
 * @param dict A dictionary
 * @return a list of keys
 */
export const keys = (dict: Dictionary<unknown>): List<string> => flow(dict, toPairs, map(getEntryKey))
