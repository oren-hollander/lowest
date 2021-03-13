import { isNotNil, Nilable } from '../../util/util'
import { Dictionary, overEntryValue, transformDictionary } from '../dictionary'

/**
 * Removes null or undefined values from the dictionary
 * @param dict The [[Dictionary]] to remove from
 * @return A collection without null or undefined values
 */
export const compactDictionary = <T>(dict: Dictionary<Nilable<T>>): Dictionary<T> =>
  transformDictionary(dict, values => values.filter(overEntryValue(isNotNil))) as Dictionary<T>
