import { Predicate } from '../../function'
import { Dictionary, overEntryValue, transformDictionary } from '../dictionary'

export const filterDictionary = <T>(dict: Dictionary<T>, p: Predicate<T>): Dictionary<T> =>
  transformDictionary(dict, values => values.filter(overEntryValue(p)))
