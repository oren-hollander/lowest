import { Dictionary, Nilable } from '../types'
import { overPairValues, transformDictionary } from '../util'

const isNotNil = (value: unknown): boolean => value !== null && value !== undefined

/**
 * Removes null or undefined values from the dictionary
 * @param dict The [[Dictionary]] to remove from
 * @return A collection without null or undefined values
 */
export const compact = <T>(dict: Dictionary<Nilable<T>>): Dictionary<T> =>
  transformDictionary(dict, values => values.filter(overPairValues(isNotNil))) as Dictionary<T>
