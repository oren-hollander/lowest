import { AnyObject } from '../object'
import { Fn } from '../../function'
import { set } from './set'
import { curry3 } from '../../util/util'

const curried = curry3(set)

/**
 * Sets a value for a key in an object
 * @template T The type of an object
 * @template K The type of the keys of ```T```
 * @param obj An object
 * @param key A key
 * @param value A value
 * @return A new object with the ```value``` set for ```key```
 */
function overloaded<T extends AnyObject, K extends keyof T>(obj: T, key: K, value: T[K]): T
function overloaded<T extends AnyObject, K extends keyof T>(key: K, value: T[K]): Fn<T>
function overloaded<T extends AnyObject, K extends keyof T>(
  obj_key: T | K,
  key_value: K | T[K],
  value?: T[K]
): T | Fn<T> {
  return curried(obj_key, key_value, value)
}

export { overloaded as set }
