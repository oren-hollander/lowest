import { AnyObject, Fn } from '../types'

const setValue = <T extends AnyObject, K extends keyof T>(obj: T, key: K, value: T[K]): T => ({
  ...obj,
  [key]: value
})

export function set<T extends AnyObject, K extends keyof T>(obj: T, key: K, value: T[K]): T
export function set<T extends AnyObject, K extends keyof T>(key: K, value: T[K]): Fn<T>
export function set<T extends AnyObject, K extends keyof T>(
  obj_key: T | K,
  key_value: K | T[K],
  value?: T[K]
): T | Fn<T> {
  if (value) {
    const obj = obj_key as T
    const key = key_value as K
    return setValue(obj, key, value)
  } else {
    const key = obj_key as K
    const value = key_value as T[K]
    return (obj: T): T => setValue(obj, key, value)
  }
}
