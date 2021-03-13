import { AnyObject } from '../object'
import { Fn } from '../../function'
import { update } from './update'
import { curry3 } from '../../util/util'

const curried = curry3(update)

/**
 * Update a value for a key on an object
 * @template T The type of an object
 * @template K The type of the keys of ```T```
 * @param obj An object
 * @param key A key
 * @param f An updater function accepting the existing value and returning a new value
 * @return A new object with the new value returned from calling ```f``` set for ```key```
 */
function overloaded<T extends AnyObject, K extends keyof T>(obj: T, key: K, f: Fn<T[K]>): T
function overloaded<T extends AnyObject, K extends keyof T>(key: K, f: Fn<T[K]>): Fn<T>
function overloaded<T extends AnyObject, K extends keyof T>(
  obj_key: T | K,
  key_f: K | Fn<T[K]>,
  f?: Fn<T[K]>
): T | Fn<T> {
  return curried(obj_key, key_f, f)
}

export { overloaded as update }
