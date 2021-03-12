import type { List, Fn } from '../types'
import { flatMap as _flatMap } from 'lodash'

export function flatMap<I, O>(list: List<I>, f: Fn<I, List<O>>): List<O>
export function flatMap<I, O>(f: Fn<I, List<O>>): Fn<List<I>, List<O>>
export function flatMap<I, O>(list_f: List<I> | Fn<I, List<O>>, f?: Fn<I, List<O>>): List<O> | Fn<List<I>, List<O>> {
  if (f) {
    const list = list_f as List<I>
    return _flatMap(list, f)
  } else {
    const f = list_f as Fn<I, List<O>>
    return (list: List<I>): List<O> => _flatMap(list, f)
  }
}
