import { Fn } from '../../function'
import { Dictionary, overEntries, transformDictionary } from '../dictionary'

export const mapDictionary = <I, O>(dict: Dictionary<I>, f: Fn<I, O>): Dictionary<O> =>
  transformDictionary(dict, values => values.map(overEntries(f)))
