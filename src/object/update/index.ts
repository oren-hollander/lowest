import { AnyObject } from '../object'
import { Fn } from '../../function'
import { update } from './update'
import { curry3 } from '../../util/util'

const curried = curry3(update)

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
