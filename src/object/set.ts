import { AnyObject, Fn } from '../types'
import { curry3 } from '../curry'

const setImpl = curry3(
  <T extends AnyObject, K extends keyof T>(obj: T, key: K, value: T[K]): T => ({
    ...obj,
    [key]: value
  })
)

export function set<T extends AnyObject, K extends keyof T>(obj: T, key: K, value: T[K]): T
export function set<T extends AnyObject, K extends keyof T>(key: K, value: T[K]): Fn<T>
export function set<T extends AnyObject, K extends keyof T>(
  obj_key: T | K,
  key_value: K | T[K],
  value?: T[K]
): T | Fn<T> {
  return setImpl(obj_key, key_value, value)
}
