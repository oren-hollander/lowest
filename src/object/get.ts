import { isFunction } from 'lodash'
import { AnyObject, Fn } from '../types'

const getValue = <T extends AnyObject, K extends keyof T, R>(obj: T, key_get: K | Fn<T, R>): T[K] | R =>
  isFunction(key_get) ? key_get(obj) : obj[key_get]

export function get<T extends AnyObject, K extends keyof T>(obj: T, key: K): T[K]
export function get<T extends AnyObject, R>(obj: T, get: Fn<T, R>): R
export function get<T extends AnyObject, K extends keyof T>(key: K): (obj: T) => T[K]
export function get<T extends AnyObject, R>(get: Fn<T, R>): (obj: T) => R
export function get<T extends AnyObject, K extends keyof T, R>(
  obj_key_get: T | K | Fn<T, R>,
  key_get?: K | Fn<T, R>
): T[K] | R {
  if (key_get) {
    return getValue(obj_key_get as T, key_get)
  } else {
    return ((obj: T): T[K] | R => getValue(obj, obj_key_get as K | Fn<T, R>)) as T[K] | R
  }
}
