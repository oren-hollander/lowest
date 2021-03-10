import { Dictionary } from '../object/dictionary'
import { Nilable } from '../types'
import { transformDictionary } from '../util'

const isNotNil = (value: unknown) => value !== null && value !== undefined

export function compact<T>(arr: Nilable<T>[]): T[]
export function compact<T>(dict: Dictionary<Nilable<T>>): Dictionary<T>
export function compact<T>(arr_dict: Nilable<T>[] | Dictionary<Nilable<T>>): T[] | Dictionary<T> {
  if (Array.isArray(arr_dict)) {
    return arr_dict.filter(isNotNil) as T[]
  } else {
    return transformDictionary(arr_dict, values => values.filter(([, value]) => isNotNil(value)) as [string, T][])
  }
}
