import { Fn } from '../function'

export type Dictionary<T> = {
  readonly [key: string]: T
}

/**
 * A key and value pair - a dictionary entry
 */
export type Entry<T> = [string, T]

export const getEntryKey = ([key]: Entry<unknown>): string => key
export const getEntryValue = <T>([, value]: Entry<T>): T => value

export const transformDictionary = <I, O>(
  dict: Dictionary<I>,
  tx: Fn<ReadonlyArray<Entry<I>>, ReadonlyArray<Entry<O>>>
): Dictionary<O> => Object.fromEntries(tx(Object.entries(dict)))

export const overEntryValues = <I, O>(f: Fn<I, O>): Fn<Entry<I>, O> => ([, value]: Entry<I>): O => f(value)

export const overEntries = <I, O>(f: Fn<I, O>): Fn<Entry<I>, Entry<O>> => ([key, value]: Entry<I>): Entry<O> => [
  key,
  f(value)
]
