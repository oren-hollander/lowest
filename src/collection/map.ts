import type { List, Dictionary, Tx, Collection } from '../types'
import { isList, transformDictionary } from '../util'

type Mapper<I, O> = {
  (dict: Dictionary<I>): Dictionary<O>
  (list: List<I>): List<O>
}

const mapCollection = <I, O>(collection: Collection<I>, tx: Tx<I, O>): Collection<O> =>
  isList(collection)
    ? collection.map(tx)
    : transformDictionary(collection, values => values.map(([key, value]) => [key, tx(value)]))

export function map<I, O>(list: List<I>, f: Tx<I, O>): List<O>
export function map<I, O>(dict: Dictionary<I>, tx: Tx<I, O>): Dictionary<O>
export function map<I, O>(tx: Tx<I, O>): Mapper<I, O>
export function map<I, O>(
  list_dict_tx: Collection<I> | Tx<I, O>,
  tx?: Tx<I, O>
): Collection<O> | Tx<List<I>, List<O>> | Tx<Dictionary<I>, Dictionary<O>> {
  if (tx) {
    return mapCollection(list_dict_tx as Collection<I>, tx)
  } else {
    const tx = list_dict_tx as Tx<I, O>
    return (collection: Collection<I>) => mapCollection(collection, tx) as List<O> & Dictionary<O>
  }
}
