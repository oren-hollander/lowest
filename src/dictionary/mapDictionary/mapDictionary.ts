import { overPairs, transformDictionary } from '../../util/util'
import { Fn } from '../../function'
import { Dictionary } from '../dictionary'

export const mapDictionary = <I, O>(dict: Dictionary<I>, f: Fn<I, O>): Dictionary<O> =>
  transformDictionary(dict, values => values.map(overPairs(f)))
