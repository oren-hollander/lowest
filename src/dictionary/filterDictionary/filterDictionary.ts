import { overPairValues, transformDictionary } from '../../util/util'
import { Predicate } from '../../function'
import { Dictionary } from '../dictionary'

export const filterDictionary = <T>(dict: Dictionary<T>, p: Predicate<T>): Dictionary<T> =>
  transformDictionary(dict, values => values.filter(overPairValues(p)))
