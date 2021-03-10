import { AnyObject, Func } from '../types'

export function assign<A extends AnyObject, B extends AnyObject>(a: A, b: B): A | B
export function assign<A extends AnyObject, B extends AnyObject>(a: A): Func<B, A | B>
export function assign<A extends AnyObject, B extends AnyObject>(a: A, b?: B): (A | B) | Func<B, A | B> {
  if (b) {
    return { ...a, ...b }
  } else {
    return (b: B): A | B => ({ ...a, ...b })
  }
}
