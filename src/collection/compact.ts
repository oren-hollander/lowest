import { List, Dictionary, Nilable } from '../types'
import { isList, overPairValues, transformDictionary } from '../util'

const isNotNil = (value: unknown): boolean => value !== null && value !== undefined

export function compact<T>(list: List<Nilable<T>>): List<T>
export function compact<T>(dict: Dictionary<Nilable<T>>): Dictionary<T>
export function compact<T>(list_dict: List<Nilable<T>> | Dictionary<Nilable<T>>): List<T> | Dictionary<T> {
  if (isList(list_dict)) {
    return list_dict.filter(isNotNil) as List<T>
  } else {
    return transformDictionary(list_dict, values => values.filter(overPairValues(isNotNil)) as List<[string, T]>)
  }
}
