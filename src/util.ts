import { Collection, CollectionType, Dictionary, DictionaryType, List, ListType, Tx } from './types'

export const transformDictionary = <I, O>(
  dict: Dictionary<I>,
  tx: Tx<ReadonlyArray<[string, I]>, ReadonlyArray<[string, O]>>
): Dictionary<O> => Object.fromEntries(tx(Object.entries(dict)))

export const collectionType = <T>(collection: Collection<T>): CollectionType =>
  Array.isArray(collection) ? ListType : DictionaryType

export const isList = <T>(collection: Collection<T>): collection is List<T> => collectionType(collection) === ListType
