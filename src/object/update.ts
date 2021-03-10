import { AnyObject, Func } from '../types'

const updateImpl = <T extends AnyObject, K extends keyof T>(obj: T, key: K, f: Func<T[K]>): T => ({
  ...obj,
  [key]: f(obj[key]),
})

export function update<T extends AnyObject, K extends keyof T>(obj: T, key: K, f: Func<T[K]>): T
export function update<T extends AnyObject, K extends keyof T>(key: K, f: Func<T[K]>): (obj: T) => T
export function update<T extends AnyObject, K extends keyof T>(
  obj_key: T | K,
  key_f?: K | Func<T[K]>,
  f?: Func<T[K]>
): T | ((obj: T) => T) {
  if (f) {
    const obj = obj_key as T
    const key = key_f as K
    return updateImpl(obj, key, f)
  } else {
    const key = obj_key as K
    const f = key_f as Func<T[K]>
    return (obj: T): T => updateImpl(obj, key, f)
  }
}
