import { AnyObject } from '../object'

export const has = <T extends AnyObject>(obj: T, key: keyof T): boolean =>
  Object.prototype.hasOwnProperty.call(obj, key)
