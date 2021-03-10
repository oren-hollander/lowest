export type Transform<I, O> = (i: I) => O
export type Hx<T> = Transform<T, T>
