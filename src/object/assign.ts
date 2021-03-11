import { AnyObject, Fn } from '../types'

export function assign<A extends AnyObject, B extends AnyObject>(a: A, b: B): A | B
export function assign<A extends AnyObject, B extends AnyObject>(a: A): Fn<B, A | B>
export function assign<A extends AnyObject, B extends AnyObject>(a: A, b?: B): (A | B) | Fn<B, A | B> {
  if (b) {
    return { ...a, ...b }
  } else {
    return (b: B): A | B => ({ ...a, ...b })
  }
}
