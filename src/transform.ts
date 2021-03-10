export type Tx<I, O> = (i: I) => O
export type Hx<T> = Tx<T, T>
