// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyObject<T = any> = Record<string, T>

export type Fn<I, O = I> = (i: I) => O

export type Predicate<T> = (value: T) => boolean

/**
 * Optional value
 */
export type Maybe<T> = T | undefined

type Nil = Maybe<null>

/**
 * Optionally null or undefined
 */
export type Nilable<T> = T | Nil

/**
 * A read only dictionary
 */
export type Dictionary<T = unknown> = {
  readonly [key: string]: T
}

/**
 * A read only array
 */
export type List<T> = ReadonlyArray<T>

/**
 * A read only [[List]] or [[Dictionary]]
 */
export type Collection<T> = Dictionary<T> | List<T>

export const ListType = Symbol('list')
export const DictionaryType = Symbol('dictionary')

/**
 * Either a collection or a list
 */
export type CollectionType = typeof ListType | typeof DictionaryType

export type Pair<T> = [string, T]
export type ObjectPair<T extends AnyObject> = [keyof T, T]

export type Tuple<L, R> = [L, R]
