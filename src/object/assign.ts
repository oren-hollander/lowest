import { AnyObject, Tx } from '../types'

export function assign<A extends AnyObject, B extends AnyObject>(a: A, b: B): A | B
export function assign<A extends AnyObject, B extends AnyObject>(a: A): Tx<B, A | B>
export function assign<A extends AnyObject, B extends AnyObject>(a: A, b?: B): (A | B) | Tx<B, A | B> {
  if (b) {
    return { ...a, ...b }
  } else {
    return (b: B): A | B => ({ ...a, ...b })
  }
}
