import { AnyObject } from '../object'
import { Fn } from '../../function'
import { assign } from './assign'
import { curry2 } from '../../util/util'

const curried = curry2(assign)

/**
 * Assigns the entries of one object to another
 * @template A the first object type
 * @template B the second object type
 * @param a An object
 * @param b Another object
 * @return A new object containing all entries in ```a``` overridden with entries of ```b```
 * If an entry with the same key exists in both ```a``` and ```b``` the entries from ```b``` will be in the result
 */
function overloaded<A extends AnyObject, B extends AnyObject>(a: A, b: B): A | B
function overloaded<A extends AnyObject, B extends AnyObject>(b: B): Fn<A, A | B>
function overloaded<A extends AnyObject, B extends AnyObject>(a_b: A | B, b?: B): (A | B) | Fn<A, A | B> {
  return curried(a_b, b)
}

export { overloaded as assign }
