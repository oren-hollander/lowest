import { find } from '../collection'
import { flow, Fn } from '../function'
import { fromPairs, getEntryKey, toPairs } from '../dictionary'
import { List, filter } from '../list'
import { curry2 } from '../util/curry'
import { AnyObject } from './object'

const omitImpl = curry2(
  <T extends AnyObject, K extends keyof T>(obj: T, keys: List<K>): Omit<T, K> =>
    flow(
      obj,
      toPairs,
      filter(pair => find(keys, key => key === getEntryKey(pair)) === undefined),
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
