import { AnyObject, Fn } from '../types'
import { curry2 } from '../curry'

const hasImpl = curry2(<T extends AnyObject>(obj: T, key: keyof T): boolean =>
  Object.prototype.hasOwnProperty.call(obj, key)
)

export function has<T extends AnyObject>(obj: T, key: keyof T): boolean
export function has<T extends AnyObject>(key: keyof T): Fn<T, boolean>
export function has<T extends AnyObject>(obj_key: T | keyof T, key?: keyof T): boolean | Fn<T, boolean> {
  return hasImpl(obj_key, key)
}
