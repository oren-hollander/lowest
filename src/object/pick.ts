import { AnyObject, Fn, List } from '../types'
import { getPairKey } from '../util'
import { filter, find } from '../collection'
import { flow } from '../function'
import { fromPairs, toPairs } from '../dictionary'

const pickKeys = <T extends AnyObject, K extends keyof T>(obj: T, keys: List<K>): Pick<T, K> =>
  flow(
    obj,
    toPairs,
    filter(pair => find(keys, key => key === getPairKey(pair)) !== undefined),
    fromPairs
  ) as Pick<T, K>

export function pick<T extends AnyObject, K extends keyof T>(obj: T, keys: List<K>): Pick<T, K>
export function pick<T extends AnyObject, K extends keyof T>(keys: List<K>): Fn<T, Pick<T, K>>
export function pick<T extends AnyObject, K extends keyof T>(
  obj_keys: T | List<K>,
  keys?: List<K>
): Pick<T, K> | Fn<T, Pick<T, K>> {
  if (keys) {
    const dict = obj_keys as T
    return pickKeys(dict, keys)
  } else {
    const keys = obj_keys as List<K>
    return (dict: T): Pick<T, K> => pickKeys(dict, keys)
  }
}
