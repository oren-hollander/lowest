import { List, Dictionary, Nilable } from '../types'
import { transformDictionary } from '../util'

const isNotNil = (value: unknown): boolean => value !== null && value !== undefined

export function compact<T>(list: List<Nilable<T>>): List<T>
export function compact<T>(dict: Dictionary<Nilable<T>>): Dictionary<T>
export function compact<T>(list_dict: List<Nilable<T>> | Dictionary<Nilable<T>>): List<T> | Dictionary<T> {
  if (Array.isArray(list_dict)) {
    return list_dict.filter(isNotNil)
  } else {
    return transformDictionary(
      list_dict as Dictionary<Nilable<T>>,
      values => values.filter(([, value]) => isNotNil(value)) as List<[string, T]>
    )
  }
}
