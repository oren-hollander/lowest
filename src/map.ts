import type { Tx } from './transform'

export function map<I, O>(xs: I[], f: Tx<I, O>): O[]
export function map<I, O>(f: Tx<I, O>): Tx<I[], O[]>
export function map<I, O>(xs_f: I[] | Tx<I, O>, f?: Tx<I, O>): O[] | Tx<I[], O[]> {
  if (f) {
    const xs = xs_f as I[]
    return xs.map(f)
  } else {
    const f = xs_f as Tx<I, O>
    return (xs: I[]): O[] => xs.map(f)
  }
}
