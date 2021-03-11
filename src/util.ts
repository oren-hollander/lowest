import { Collection, CollectionType, Dictionary, DictionaryType, List, ListType, Pair, Fn } from './types'
import { values } from './dictionary'

export const transformDictionary = <I, O>(
  dict: Dictionary<I>,
  tx: Fn<ReadonlyArray<Pair<I>>, ReadonlyArray<Pair<O>>>
): Dictionary<O> => Object.fromEntries(tx(Object.entries(dict)))

export const collectionType = <T>(collection: Collection<T>): CollectionType =>
  Array.isArray(collection) ? ListType : DictionaryType

export const isList = (collection: Collection<unknown>): collection is List<unknown> =>
  collectionType(collection) === ListType

export const asList = <T>(collection: Collection<T>): List<T> => (isList(collection) ? collection : values(collection))

export const getPairKey = ([key]: Pair<unknown>): string => key
export const getPairValue = <T>([, value]: Pair<T>): T => value
