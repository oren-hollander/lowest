import type { List, Tx } from '../types'
import { Dictionary } from '../dictionary/dictionary'
import { transformDictionary } from '../util'

type Mapper<I, O> = {
  (i: Dictionary<I>): Dictionary<O>
  (i: List<I>): List<O>
}

const mapper = <I, O>(tx: Tx<I, O>, list_dict: List<I> | Dictionary<I>): List<O> | Dictionary<O> => {
  if (Array.isArray(list_dict)) {
    const list = list_dict as List<I>
    return list.map(tx)
  } else {
    const dict = list_dict as Dictionary<I>
    return transformDictionary(dict, values => values.map(([key, value]) => [key, tx(value)]))
  }
}

export function map<I, O>(list: List<I>, f: Tx<I, O>): List<O>
export function map<I, O>(dict: Dictionary<I>, tx: Tx<I, O>): Dictionary<O>
export function map<I, O>(tx: Tx<I, O>): Mapper<I, O>
export function map<I, O>(
  list_dict_tx: List<I> | Dictionary<I> | Tx<I, O>,
  tx?: Tx<I, O>
): List<O> | Dictionary<O> | Tx<List<I>, List<O>> | Tx<Dictionary<I>, Dictionary<O>> {
  if (tx) {
    return mapper(tx, list_dict_tx as List<I> | Dictionary<I>)
  } else {
    const tx = list_dict_tx as Tx<I, O>
    return (list_dict: List<I> | Dictionary<I>) => mapper(tx, list_dict) as List<O> & Dictionary<O>
  }
}
