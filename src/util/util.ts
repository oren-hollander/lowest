import { Dictionary, Pair } from '../dictionary'
import { Fn } from '../function'

export const transformDictionary = <I, O>(
  dict: Dictionary<I>,
  tx: Fn<ReadonlyArray<Pair<I>>, ReadonlyArray<Pair<O>>>
): Dictionary<O> => Object.fromEntries(tx(Object.entries(dict)))

export const overPairValues = <I, O>(f: Fn<I, O>): Fn<Pair<I>, O> => ([, value]: Pair<I>): O => f(value)
export const overPairs = <I, O>(f: Fn<I, O>): Fn<Pair<I>, Pair<O>> => ([key, value]: Pair<I>): Pair<O> => [
  key,
  f(value)
]

export const getPairKey = ([key]: Pair<unknown>): string => key
export const getPairValue = <T>([, value]: Pair<T>): T => value

export type Nilable<T> = T | null | undefined
