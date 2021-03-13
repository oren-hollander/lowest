import { AnyObject } from '../object'

export const get = <T extends AnyObject, K extends keyof T>(obj: T, key: K): T[K] => obj[key]
