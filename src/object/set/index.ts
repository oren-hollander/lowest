import { AnyObject } from '../object'
import { Fn } from '../../function'
import { curry3 } from '../../util/curry'
import { set } from './set'

const curried = curry3(set)

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
