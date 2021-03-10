import type { Transform } from './transform'
import { Dictionary } from './dictionary'

const mapValuesImpl = <I, O>(dict: Dictionary<I>, f: Transform<I, O>): Dictionary<O> =>
  Object.fromEntries(Object.entries(dict).map(([key, value]) => [key, f(value)]))

export function mapValues<I, O>(dict: Dictionary<I>, f: Transform<I, O>): Dictionary<O>
export function mapValues<I, O>(f: Transform<I, O>): Transform<Dictionary<I>, Dictionary<O>>
export function mapValues<I, O>(
  dict_f: Dictionary<I> | Transform<I, O>,
  f?: Transform<I, O>
): Dictionary<O> | Transform<Dictionary<I>, Dictionary<O>> {
  if (f) {
    const dict = dict_f as Dictionary<I>
    return mapValuesImpl(dict, f)
  } else {
    const f = dict_f as Transform<I, O>
    return (obj: Dictionary<I>): Dictionary<O> => mapValuesImpl(obj, f)
  }
}
