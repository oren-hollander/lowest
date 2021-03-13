import { AnyObject } from '../object'
import { Fn } from '../../function'
import { has } from './has'
import { curry2 } from '../../util/util'

const curried = curry2(has)

function overloaded<T extends AnyObject>(obj: T, key: keyof T): boolean
function overloaded<T extends AnyObject>(key: keyof T): Fn<T, boolean>
function overloaded<T extends AnyObject>(obj_key: T | keyof T, key?: keyof T): boolean | Fn<T, boolean> {
  return curried(obj_key, key)
}

export { overloaded as has }
