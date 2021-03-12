import { Dictionary, Pair, Fn, Collection } from './types'
import { List } from './list'
import { values } from './dictionary'

export const transformDictionary = <I, O>(
  dict: Dictionary<I>,
  tx: Fn<ReadonlyArray<Pair<I>>, ReadonlyArray<Pair<O>>>
): Dictionary<O> => Object.fromEntries(tx(Object.entries(dict)))

export const overPairValues = <I, O>(f: Fn<I, O>): Fn<Pair<I>, O> => ([, value]: Pair<I>): O => f(value)
export const overPairs = <I, O>(f: Fn<I, O>): Fn<Pair<I>, Pair<O>> => ([key, value]: Pair<I>): Pair<O> => [
  key,
  f(value)
]

export const isList = <T>(collection: Collection<T>): collection is List<T> => Array.isArray(collection)

export const asList = <T>(collection: Collection<T>): List<T> => (isList(collection) ? collection : values(collection))

export const getPairKey = ([key]: Pair<unknown>): string => key
export const getPairValue = <T>([, value]: Pair<T>): T => value
