import { AnyObject, Fn } from '../types'
import { getPairKey } from '../util'
import { find } from '../collection'
import { flow } from '../function'
import { fromPairs, toPairs } from '../dictionary'
import { List, filter } from '../list'
import { curry2 } from '../curry'

const omitImpl = curry2(
  <T extends AnyObject, K extends keyof T>(obj: T, keys: List<K>): Omit<T, K> =>
    flow(
      obj,
      toPairs,
      filter(pair => find(keys, key => key === getPairKey(pair)) === undefined),
      fromPairs
    ) as Omit<T, K>
)

export function omit<T extends AnyObject, K extends keyof T>(obj: T, keys: List<K>): Omit<T, K>
export function omit<T extends AnyObject, K extends keyof T>(keys: List<K>): Fn<T, Omit<T, K>>
export function omit<T extends AnyObject, K extends keyof T>(
  obj_keys: T | List<K>,
  keys?: List<K>
): Omit<T, K> | Fn<T, Omit<T, K>> {
  return omitImpl(obj_keys, keys)
}
