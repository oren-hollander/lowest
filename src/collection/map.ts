import type { List, Dictionary, Fn, Collection } from '../types'
import { isList, overPairs, transformDictionary } from '../util'

type Map<I, O> = {
  (dict: Dictionary<I>): Dictionary<O>
  (list: List<I>): List<O>
}

const mapCollection = <I, O>(collection: Collection<I>, f: Fn<I, O>): Collection<O> =>
  isList(collection) ? collection.map(f) : transformDictionary(collection, values => values.map(overPairs(f)))

/**
 * * [[List]] map
 * @template I The input type.
 * @template O The output type.
 * @param list The list to map over.
 * @param f The transform function.
 * @return The transformed list
 */
export function map<I, O>(list: List<I>, f: Fn<I, O>): List<O>

/**
 * [[Dictionary]] map
 * @template I The input type.
 * @template O The output type.
 * @param dict The dictionary to map over.
 * @param f The transform function.
 * @return The transformed dictionary
 */
export function map<I, O>(dict: Dictionary<I>, f: Fn<I, O>): Dictionary<O>

/**
 * Curried [[Collection]] map
 * @template I The input type.
 * @template O The output type.
 * @param f The transform function.
 * @return The {@link Map} function that accepts the collection
 */
export function map<I, O>(f: Fn<I, O>): Map<I, O>

export function map<I, O>(
  list_dict_f: Collection<I> | Fn<I, O>,
  f?: Fn<I, O>
): Collection<O> | Fn<List<I>, List<O>> | Fn<Dictionary<I>, Dictionary<O>> {
  if (f) {
    return mapCollection(list_dict_f as Collection<I>, f)
  } else {
    const f = list_dict_f as Fn<I, O>
    return (collection: Collection<I>) => mapCollection(collection, f) as List<O> & Dictionary<O>
  }
}
