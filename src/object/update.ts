import { AnyObject, Fn } from '../types'

const updateObject = <T extends AnyObject, K extends keyof T>(obj: T, key: K, f: Fn<T[K]>): T => ({
  ...obj,
  [key]: f(obj[key])
})

export function update<T extends AnyObject, K extends keyof T>(obj: T, key: K, f: Fn<T[K]>): T
export function update<T extends AnyObject, K extends keyof T>(key: K, f: Fn<T[K]>): (obj: T) => T
export function update<T extends AnyObject, K extends keyof T>(
  obj_key: T | K,
  key_f?: K | Fn<T[K]>,
  f?: Fn<T[K]>
): T | ((obj: T) => T) {
  if (f) {
    const obj = obj_key as T
    const key = key_f as K
    return updateObject(obj, key, f)
  } else {
    const key = obj_key as K
    const f = key_f as Fn<T[K]>
    return (obj: T): T => updateObject(obj, key, f)
  }
}
