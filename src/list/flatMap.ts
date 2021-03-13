import { flatMap as _flatMap } from 'lodash'
import { List } from './list'
import { curry2 } from '../util/curry'
import { Fn } from '../function'

const flatMapImpl = curry2(<I, O>(list: List<I>, f: Fn<I, List<O>>): List<O> => _flatMap(list, f))

export function flatMap<I, O>(list: List<I>, f: Fn<I, List<O>>): List<O>
export function flatMap<I, O>(f: Fn<I, List<O>>): Fn<List<I>, List<O>>
export function flatMap<I, O>(list_f: List<I> | Fn<I, List<O>>, f?: Fn<I, List<O>>): List<O> | Fn<List<I>, List<O>> {
  return flatMapImpl(list_f, f)
}
