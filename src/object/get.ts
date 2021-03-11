import { AnyObject, Fn } from '../types'

export function get<T extends AnyObject, K extends keyof T>(obj: T, key: K): T[K]
export function get<T extends AnyObject, K extends keyof T>(key: K): Fn<T, T[K]>
export function get<T extends AnyObject, K extends keyof T>(obj_key: T | K, key?: K): T[K] | Fn<T, T[K]> {
  if (key) {
    const obj = obj_key as T
    return obj[key]
  } else {
    const key = obj_key as K
    return (obj: T): T[K] => obj[key] as T[K]
  }
}
