// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyObject<T = any> = Record<string, T>

export type Fn<I, O = I> = (i: I) => O

export type Predicate<T> = (value: T) => boolean

export type Nilable<T> = T | undefined | null

export type Dictionary<T> = {
  readonly [key: string]: T
}

/**
 * A read only array
 */
export type List<T> = ReadonlyArray<T>

export type LL<T> = ReadonlyArray<ReadonlyArray<T>>

export type Collection<T> = Dictionary<T> | List<T>

export const ListType = Symbol('list')
export const DictionaryType = Symbol('dictionary')

export type CollectionType = typeof ListType | typeof DictionaryType

export type Pair<T> = [string, T]

export type Maybe<T> = T | undefined
