import { AnyObject } from '../object'
import { List } from '../../list'
import { Fn } from '../../function'
import { omit } from './omit'
import { curry2 } from '../../util/util'

const curried = curry2(omit)

function overloaded<T extends AnyObject, K extends keyof T>(obj: T, keys: List<K>): Omit<T, K>
function overloaded<T extends AnyObject, K extends keyof T>(keys: List<K>): Fn<T, Omit<T, K>>
function overloaded<T extends AnyObject, K extends keyof T>(
  obj_keys: T | List<K>,
  keys?: List<K>
): Omit<T, K> | Fn<T, Omit<T, K>> {
  return curried(obj_keys, keys)
}

export { overloaded as omit }
