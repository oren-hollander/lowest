import { Nilable, overPairValues, transformDictionary } from '../../util/util'
import { Dictionary } from '../dictionary'

const isNotNil = (value: unknown): boolean => value !== null && value !== undefined

/**
 * Removes null or undefined values from the dictionary
 * @param dict The [[Dictionary]] to remove from
 * @return A collection without null or undefined values
 */
export const compactDictionary = <T>(dict: Dictionary<Nilable<T>>): Dictionary<T> =>
  transformDictionary(dict, values => values.filter(overPairValues(isNotNil))) as Dictionary<T>
