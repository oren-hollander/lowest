import { Fn } from '../function'

/**
 * A read only dictionary. Keys are strings and values are of the same type T
 * @template T The dictionary item type
 */
export type Dictionary<T> = Readonly<Record<string, T>>

/**
 * A key and value pair - a dictionary entry
 * @template T The entry item type
 */
export type Entry<T> = [string, T]

export const getEntryKey = ([key]: Entry<unknown>): string => key
export const getEntryValue = <T>([, value]: Entry<T>): T => value

export const transformDictionary = <I, O>(
  dict: Dictionary<I>,
  tx: Fn<ReadonlyArray<Entry<I>>, ReadonlyArray<Entry<O>>>
): Dictionary<O> => Object.fromEntries(tx(Object.entries(dict)))

export const overEntryValue = <I, O>(f: Fn<I, O>): Fn<Entry<I>, O> => ([, value]: Entry<I>): O => f(value)

export const overEntry = <I, O>(f: Fn<I, O>): Fn<Entry<I>, Entry<O>> => ([key, value]: Entry<I>): Entry<O> => [
  key,
  f(value)
]
