import type { Tx } from '../types'
import { Dictionary } from '../object/dictionary'
import { transformDictionary } from '../util'

type Mapper<I, O> = {
  (i: Dictionary<I>): Dictionary<O>
  (i: I[]): O[]
}

const mapper = <I, O>(tx: Tx<I, O>, arr_dict: I[] | Dictionary<I>): O[] | Dictionary<O> => {
  if (Array.isArray(arr_dict)) {
    const arr = arr_dict as I[]
    return arr.map(tx)
  } else {
    const dict = arr_dict as Dictionary<I>
    return transformDictionary(dict, values => values.map(([key, value]) => [key, tx(value)]))
  }
}

export function map<I, O>(arr: I[], f: Tx<I, O>): O[]
export function map<I, O>(dict: Dictionary<I>, tx: Tx<I, O>): Dictionary<O>
export function map<I, O>(tx: Tx<I, O>): Mapper<I, O>
export function map<I, O>(
  arr_dict_tx: I[] | Dictionary<I> | Tx<I, O>,
  tx?: Tx<I, O>
): O[] | Dictionary<O> | Tx<I[], O[]> | Tx<Dictionary<I>, Dictionary<O>> {
  if (tx) {
    return mapper(tx, arr_dict_tx as I[] | Dictionary<I>)
  } else {
    const tx = arr_dict_tx as Tx<I, O>
    return (dict_arr: I[] | Dictionary<I>) => mapper(tx, dict_arr) as O[] & Dictionary<O>
  }
}
