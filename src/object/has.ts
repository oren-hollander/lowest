import { AnyObject, Fn } from '../types'
import { isUndefined } from 'lodash'

export function has<T extends AnyObject>(obj: T, key: keyof T): boolean
export function has<T extends AnyObject>(key: keyof T): Fn<T, boolean>
export function has<T extends AnyObject>(obj_key: T | keyof T, key?: keyof T): boolean | Fn<T, boolean> {
  if (!isUndefined(key)) {
    const obj = obj_key as T
    return Object.prototype.hasOwnProperty.call(obj, key)
  } else {
    const key = obj_key as keyof T
    return (obj: T): boolean => Object.prototype.hasOwnProperty.call(obj, key)
  }
}
