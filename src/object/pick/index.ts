import { AnyObject } from '../object'
import { List } from '../../list'
import { Fn } from '../../function'
import { pick } from './pick'
import { curry2 } from '../../util/util'

const curried = curry2(pick)

/**
 * Picks keys from an object
 * @template T The type of an object
 * @template K The type of the keys of ```T```
 * @param obj An object
 * @param keys A list of keys in ```obj```
 * @return An object with entries where the entry key is in ```keys```
 */
function overloaded<T extends AnyObject, K extends keyof T>(obj: T, keys: List<K>): Pick<T, K>
function overloaded<T extends AnyObject, K extends keyof T>(keys: List<K>): Fn<T, Pick<T, K>>
function overloaded<T extends AnyObject, K extends keyof T>(
  obj_keys: T | List<K>,
  keys?: List<K>
): Pick<T, K> | Fn<T, Pick<T, K>> {
  return curried(obj_keys, keys)
}

export { overloaded as pick }
