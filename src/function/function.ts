export type Fn<I, O = I> = (i: I) => O
export type Fn2<A, B, R> = (a: A, b: B) => R
export type Fn3<A, B, C, R> = (a: A, b: B, c: C) => R

export type Predicate<T> = (value: T) => boolean
