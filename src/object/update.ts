import { AnyObject, Fn } from '../types'
import { curry3 } from '../curry'

const updateImpl = curry3(
  <T extends AnyObject, K extends keyof T>(obj: T, key: K, f: Fn<T[K]>): T => ({
    ...obj,
    [key]: f(obj[key])
  })
)

export function update<T extends AnyObject, K extends keyof T>(obj: T, key: K, f: Fn<T[K]>): T
export function update<T extends AnyObject, K extends keyof T>(key: K, f: Fn<T[K]>): Fn<T>
export function update<T extends AnyObject, K extends keyof T>(
  obj_key: T | K,
  key_f: K | Fn<T[K]>,
  f?: Fn<T[K]>
): T | Fn<T> {
  return updateImpl(obj_key, key_f, f)
}
