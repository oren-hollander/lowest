import { find } from '../collection'
import { flow, Fn } from '../function'
import { fromPairs, toPairs } from '../dictionary'
import { List, filter } from '../list'
import { curry2 } from '../util/curry'
import { AnyObject } from './object'
import { getEntryKey } from '../dictionary/dictionary'

const pickImpl = curry2(
  <T extends AnyObject, K extends keyof T>(obj: T, keys: List<K>): Pick<T, K> =>
    flow(
      obj,
      toPairs,
      filter(pair => find(keys, key => key === getEntryKey(pair)) !== undefined),
      fromPairs
    ) as Pick<T, K>
)

export function pick<T extends AnyObject, K extends keyof T>(obj: T, keys: List<K>): Pick<T, K>
export function pick<T extends AnyObject, K extends keyof T>(keys: List<K>): Fn<T, Pick<T, K>>
export function pick<T extends AnyObject, K extends keyof T>(
  obj_keys: T | List<K>,
  keys?: List<K>
): Pick<T, K> | Fn<T, Pick<T, K>> {
  return pickImpl(obj_keys, keys)
}
