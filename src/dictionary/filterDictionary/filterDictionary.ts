import { Predicate } from '../../function'
import { Dictionary, overEntryValues, transformDictionary } from '../dictionary'

export const filterDictionary = <T>(dict: Dictionary<T>, p: Predicate<T>): Dictionary<T> =>
  transformDictionary(dict, values => values.filter(overEntryValues(p)))
