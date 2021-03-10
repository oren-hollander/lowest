/* eslint-disable @typescript-eslint/no-explicit-any */
export type AnyObject = Record<string, any>

export type Tx<I, O> = (i: I) => O
export type Hx<T> = Tx<T, T>

export type Nilable<T> = T | undefined | null
