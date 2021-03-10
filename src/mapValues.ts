import type { Tx } from './transform'
import { Dictionary } from './dictionary'

const mapValuesImpl = <I, O>(dict: Dictionary<I>, f: Tx<I, O>): Dictionary<O> =>
  Object.fromEntries(Object.entries(dict).map(([key, value]) => [key, f(value)]))

export function mapValues<I, O>(dict: Dictionary<I>, f: Tx<I, O>): Dictionary<O>
export function mapValues<I, O>(f: Tx<I, O>): Tx<Dictionary<I>, Dictionary<O>>
export function mapValues<I, O>(
  dict_f: Dictionary<I> | Tx<I, O>,
  f?: Tx<I, O>
): Dictionary<O> | Tx<Dictionary<I>, Dictionary<O>> {
  if (f) {
    const dict = dict_f as Dictionary<I>
    return mapValuesImpl(dict, f)
  } else {
    const f = dict_f as Tx<I, O>
    return (obj: Dictionary<I>): Dictionary<O> => mapValuesImpl(obj, f)
  }
}
