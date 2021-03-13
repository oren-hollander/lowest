import { AnyObject } from '../object'
import { Fn } from '../../function'
import { get } from './get'
import { curry2 } from '../../util/util'

const curried = curry2(get)

function overloaded<T extends AnyObject, K extends keyof T>(obj: T, key: K): T[K]
function overloaded<T extends AnyObject, K extends keyof T>(key: K): Fn<T, T[K]>
function overloaded<T extends AnyObject, K extends keyof T>(obj_key: T | K, key?: K): T[K] | Fn<T, T[K]> {
  return curried<T, K>(obj_key, key)
}

export { overloaded as get }
