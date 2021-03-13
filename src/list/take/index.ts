import { List } from '../list'
import { Fn } from '../../function'
import { take } from './take'
import { curry2 } from '../../util/util'

const curried = curry2(take)

function overloaded<T>(list: List<T>, size: number): List<T>
function overloaded<T>(size: number): Fn<List<T>>
function overloaded<T>(list_size: List<T> | number, size?: number): List<T> | Fn<List<T>> {
  return curried(list_size, size)
}

export { overloaded as take }
