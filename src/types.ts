export type AnyObject = Record<string, unknown>

export type Tx<I, O> = (i: I) => O
export type Hx<T> = Tx<T, T>

export type Nilable<T> = T | undefined | null

export type Dictionary<T> = {
  readonly [key: string]: T
}

export type List<T> = ReadonlyArray<T>
export type LL<T> = ReadonlyArray<ReadonlyArray<T>>
