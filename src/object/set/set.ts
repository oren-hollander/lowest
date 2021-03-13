import { AnyObject } from '../object'

export const set = <T extends AnyObject, K extends keyof T>(obj: T, key: K, value: T[K]): T => ({
  ...obj,
  [key]: value
})
