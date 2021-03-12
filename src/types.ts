import { List } from './list'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyObject<T = any> = Record<string, T>

export type Fn<I, O = I> = (i: I) => O
export type Fn2<A, B, R> = (a: A, b: B) => R
export type Fn3<A, B, C, R> = (a: A, b: B, c: C) => R

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
export type Dictionary<T> = {
  readonly [key: string]: T
}

/**
 * A read only [[List]] or [[Dictionary]]
 */
export type Collection<T> = Dictionary<T> | List<T>

/**
 * Either a collection or a list
 */

export type Pair<T> = [string, T]

export type Tuple<L, R> = [L, R]
