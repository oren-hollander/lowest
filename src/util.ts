import { Collection, CollectionType, Dictionary, DictionaryType, List, ListType, Pair, Tx } from './types'

export const transformDictionary = <I, O>(
  dict: Dictionary<I>,
  tx: Tx<ReadonlyArray<Pair<I>>, ReadonlyArray<Pair<O>>>
): Dictionary<O> => Object.fromEntries(tx(Object.entries(dict)))

export const collectionType = <T>(collection: Collection<T>): CollectionType =>
  Array.isArray(collection) ? ListType : DictionaryType

export const isList = <T>(collection: Collection<T>): collection is List<T> => collectionType(collection) === ListType

export const getPairKey = ([key]: Pair<unknown>): string => key
export const getPairValue = <T>([, value]: Pair<T>): T => value
