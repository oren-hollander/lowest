import { AnyObject } from '../object'
import { Fn } from '../../function'
import { curry2 } from '../../util/curry'
import { assign } from './assign'

const curried = curry2(assign)

function overloaded<A extends AnyObject, B extends AnyObject>(a: A, b: B): A | B
function overloaded<A extends AnyObject, B extends AnyObject>(b: B): Fn<A, A | B>
function overloaded<A extends AnyObject, B extends AnyObject>(a_b: A | B, b?: B): (A | B) | Fn<A, A | B> {
  return curried(a_b, b)
}

export { overloaded as assign }
