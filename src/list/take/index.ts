import { List } from '../list'
import { Fn } from '../../function'
import { curry2 } from '../../util/curry'
import { take } from './take'

const curried = curry2(take)

function overloaded<T>(list: List<T>, size: number): List<T>
function overloaded<T>(size: number): Fn<List<T>>
function overloaded<T>(list_size: List<T> | number, size?: number): List<T> | Fn<List<T>> {
  return curried(list_size, size)
}

export { overloaded as take }
