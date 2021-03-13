import { Fn } from '../../function'
import { Dictionary, overEntry, transformDictionary } from '../dictionary'

export const mapDictionary = <I, O>(dict: Dictionary<I>, f: Fn<I, O>): Dictionary<O> =>
  transformDictionary(dict, values => values.map(overEntry(f)))
