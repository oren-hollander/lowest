import { AnyObject } from '../object'

export const assign = <A extends AnyObject, B extends AnyObject>(a: A, b: B): A | B => ({ ...a, ...b })
