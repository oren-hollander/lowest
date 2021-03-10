import { Dictionary } from './object/dictionary'
import { Tx } from './types'

export const transformDictionary = <I, O>(dict: Dictionary<I>, tx: Tx<[string, I][], [string, O][]>): Dictionary<O> =>
  Object.fromEntries(tx(Object.entries(dict)))
