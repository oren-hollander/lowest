import { List, Dictionary, Nilable } from '../types'
import { isList, overPairValues, transformDictionary } from '../util'
import { filter } from './filter'

const isNotNil = (value: unknown): boolean => value !== null && value !== undefined

/**
 * Removes null or undefined values from the list
 * @param col The [[Collection]] to remove from
 * @return A collection without null or undefined values
 *
 * The compact function preserves the collection type passed in -
 * it returns a list when passed a list and a dictionary when passed a dictionary
 */
export const compact = <T, Col extends List<Nilable<T>> | Dictionary<Nilable<T>>>(
  col: Col
): Col extends List<Nilable<T>> ? List<T> : Dictionary<T> => {
  if (isList(col)) {
    return filter(col as List<T>, isNotNil) as Col extends List<Nilable<T>> ? List<T> : Dictionary<T>
  } else {
    return transformDictionary(
      col as Dictionary<T>,
      values => values.filter(overPairValues(isNotNil)) as List<[string, T]>
    ) as Col extends List<Nilable<T>> ? List<T> : Dictionary<T>
  }
}
