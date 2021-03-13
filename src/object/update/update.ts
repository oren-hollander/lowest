import { Fn } from '../../function'
import { AnyObject } from '../object'

export const update = <T extends AnyObject, K extends keyof T>(obj: T, key: K, f: Fn<T[K]>): T => ({
  ...obj,
  [key]: f(obj[key])
})
