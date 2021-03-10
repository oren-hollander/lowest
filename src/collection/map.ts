import type { List, Dictionary, Func, Collection } from '../types'
import { isList, transformDictionary } from '../util'

type Map<I, O> = {
  (dict: Dictionary<I>): Dictionary<O>
  (list: List<I>): List<O>
}

const mapCollection = <I, O>(collection: Collection<I>, f: Func<I, O>): Collection<O> =>
  isList(collection)
    ? collection.map(f)
    : transformDictionary(collection, values => values.map(([key, value]) => [key, f(value)]))

/**
 * * [[List]] map
 * @template I The input type.
 * @template O The output type.
 * @param list The list to map over.
 * @param f The transform function.
 * @return The transformed list
 */
export function map<I, O>(list: List<I>, f: Func<I, O>): List<O>

/**
 * [[Dictionary]] map
 * @template I The input type.
 * @template O The output type.
 * @param dict The dictionary to map over.
 * @param f The transform function.
 * @return The transformed dictionary
 */
export function map<I, O>(dict: Dictionary<I>, f: Func<I, O>): Dictionary<O>

/**
 * Curried [[Collection]] map
 * @template I The input type.
 * @template O The output type.
 * @param f The transform function.
 * @return The {@link Map} function that accepts the collection
 */
export function map<I, O>(f: Func<I, O>): Map<I, O>

export function map<I, O>(
  list_dict_f: Collection<I> | Func<I, O>,
  f?: Func<I, O>
): Collection<O> | Func<List<I>, List<O>> | Func<Dictionary<I>, Dictionary<O>> {
  if (f) {
    return mapCollection(list_dict_f as Collection<I>, f)
  } else {
    const f = list_dict_f as Func<I, O>
    return (collection: Collection<I>) => mapCollection(collection, f) as List<O> & Dictionary<O>
  }
}
