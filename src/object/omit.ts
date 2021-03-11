import { AnyObject, Fn, List } from '../types'
import { getPairKey } from '../util'
import { filter, find } from '../collection'
import { flow } from '../function'
import { fromPairs, toPairs } from '../dictionary'

const omitKeys = <T extends AnyObject, K extends keyof T>(obj: T, keys: List<K>): Omit<T, K> =>
  flow(
    obj,
    toPairs,
    filter(pair => find(keys, key => key === getPairKey(pair)) === undefined),
    fromPairs
  ) as Omit<T, K>

export function omit<T extends AnyObject, K extends keyof T>(obj: T, keys: List<K>): Omit<T, K>
export function omit<T extends AnyObject, K extends keyof T>(keys: List<K>): Fn<T, Omit<T, K>>
export function omit<T extends AnyObject, K extends keyof T>(
  obj_keys: T | List<K>,
  keys?: List<K>
): Omit<T, K> | Fn<T, Omit<T, K>> {
  if (keys) {
    const dict = obj_keys as T
    return omitKeys(dict, keys)
  } else {
    const keys = obj_keys as List<K>
    return (dict: T): Omit<T, K> => omitKeys(dict, keys)
  }
}
