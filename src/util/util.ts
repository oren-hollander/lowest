import { Fn, Fn2, Fn3 } from '../function'
import { isUndefined } from 'lodash'

export type Nilable<T> = T | null | undefined
export const isNotNil = (value: unknown): boolean => value !== null && value !== undefined

export type Curry2<A, B, R> = (a_b: A | B, b?: B) => R | Fn<A, R>

export const curry2 = <A, B, R>(f: Fn2<A, B, R>): Curry2<A, B, R> =>
  ((a_b: A | B, b?: B): R | Fn<A, R> => (!isUndefined(b) ? f(a_b as A, b) : (a: A): R => f(a, a_b as B))) as Curry2<
    A,
    B,
    R
  >

export type Curry3<A, B, C, R> = (a_b: A | B, b_c: B | C, c?: C) => R | Fn<A, R>

export const curry3 = <A, B, C, R>(f: Fn3<A, B, C, R>): Curry3<A, B, C, R> =>
  ((a_b: A | B, b_c: B | C, c?: C): R | Fn<A, R> =>
    !isUndefined(c) ? f(a_b as A, b_c as B, c) : (a: A): R => f(a, a_b as B, b_c as C)) as Curry3<A, B, C, R>
