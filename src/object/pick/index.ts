import { AnyObject } from '../object'
import { List } from '../../list'
import { Fn } from '../../function'
import { curry2 } from '../../util/curry'
import { pick } from './pick'

const curried = curry2(pick)

function overloaded<T extends AnyObject, K extends keyof T>(obj: T, keys: List<K>): Pick<T, K>
function overloaded<T extends AnyObject, K extends keyof T>(keys: List<K>): Fn<T, Pick<T, K>>
function overloaded<T extends AnyObject, K extends keyof T>(
  obj_keys: T | List<K>,
  keys?: List<K>
): Pick<T, K> | Fn<T, Pick<T, K>> {
  return curried(obj_keys, keys)
}

export { overloaded as pick }
