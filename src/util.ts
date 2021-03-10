import { Dictionary } from './dictionary/dictionary'
import { Tx } from './types'

export const transformDictionary = <I, O>(
  dict: Dictionary<I>,
  tx: Tx<ReadonlyArray<[string, I]>, ReadonlyArray<[string, O]>>
): Dictionary<O> => Object.fromEntries(tx(Object.entries(dict)))
