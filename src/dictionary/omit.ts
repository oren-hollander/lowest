import { Dictionary, Tx } from '../types'
import { getPairKey } from '../util'
import { filter, find } from '../collection'
import { flow } from '../function'
import { toPairs } from './toPairs'
import { fromPairs } from './fromPairs'

type Keys<T> = (keyof T)[]

const omitKeys = <T extends Dictionary<unknown>>(dict: T, keys: Keys<T>): Dictionary<unknown> =>
  flow(
    dict,
    toPairs,
    filter(pair => find(keys, key => key === getPairKey(pair)) === undefined),
    fromPairs
  )

export function omit<T extends Dictionary<unknown>>(dict: T, keys: Keys<T>): Dictionary<unknown>
export function omit<T extends Dictionary<unknown>>(keys: Keys<T>): Tx<T, Dictionary<unknown>>
export function omit<T extends Dictionary<unknown>>(
  dict_keys: T | Keys<T>,
  keys?: Keys<T>
): Dictionary<unknown> | Tx<T, Dictionary<unknown>> {
  if (keys) {
    const dict = dict_keys as T
    return omitKeys(dict, keys)
  } else {
    const keys = dict_keys as Keys<T>
    return (dict: T): Dictionary<unknown> => omitKeys(dict, keys)
  }
}
