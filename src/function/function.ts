/**
 * A function with one argument
 */
export type Fn<I, O = I> = (i: I) => O

/**
 * A function with two arguments
 */
export type Fn2<A, B, R> = (a: A, b: B) => R

/**
 * A function with three arguments
 */
export type Fn3<A, B, C, R> = (a: A, b: B, c: C) => R

/**
 * A function returning a boolean value
 */
export type Predicate<T> = (value: T) => boolean
