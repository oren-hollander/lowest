import type { Transform } from './transform'

export function map<I, O>(xs: I[], f: Transform<I, O>): O[]
export function map<I, O>(f: Transform<I, O>): Transform<I[], O[]>
export function map<I, O>(xs_f: I[] | Transform<I, O>, f?: Transform<I, O>): O[] | Transform<I[], O[]> {
  if (f) {
    const xs = xs_f as I[]
    return xs.map(f)
  } else {
    const f = xs_f as Transform<I, O>
    return (xs: I[]): O[] => xs.map(f)
  }
}
