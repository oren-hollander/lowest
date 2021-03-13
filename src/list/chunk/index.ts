import { List } from '../list'
import { Fn } from '../../function'
import { chunk, LL } from './chunk'
import { curry2 } from '../../util/util'

const curried = curry2(chunk)

function overloaded<T>(list: List<T>, size: number): LL<T>
function overloaded<T>(size: number): Fn<List<T>, LL<T>>
function overloaded<T>(list_size: List<T> | number, size?: number): LL<T> | Fn<List<T>, LL<T>> {
  return curried(list_size, size)
}

export { overloaded as chunk }
