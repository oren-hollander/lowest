import { List } from '../../list'
import { Dictionary, Entry } from '../dictionary'

/**
 * @template T the List item type
 * @param entries A list of entries
 * @return A dictionary constructed from the entries
 */
export const fromPairs = <T>(entries: List<Entry<T>>): Dictionary<T> => Object.fromEntries(entries)
