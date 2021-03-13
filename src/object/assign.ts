import { curry2 } from '../util/curry'
import { Fn } from '../function'
import { AnyObject } from './object'

const assignImpl = curry2(<A extends AnyObject, B extends AnyObject>(a: A, b: B): A | B => ({ ...a, ...b }))

export function assign<A extends AnyObject, B extends AnyObject>(a: A, b: B): A | B
export function assign<A extends AnyObject, B extends AnyObject>(b: B): Fn<A, A | B>
export function assign<A extends AnyObject, B extends AnyObject>(a_b: A | B, b?: B): (A | B) | Fn<A, A | B> {
  return assignImpl(a_b, b)
}
