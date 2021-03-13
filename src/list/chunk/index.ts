import { List } from '../list'
import { Fn } from '../../function'
import { chunk, LL } from './chunk'
import { curry2 } from '../../util/util'

const curried = curry2(chunk)

/**
 * Returns a list of items split into lists the size of ```size```.
 * If the list can't be split evenly, the final chunk will include the remaining items.
 * @param list
 * @param size
 */
function overloaded<T>(list: List<T>, size: number): LL<T>
function overloaded<T>(size: number): Fn<List<T>, LL<T>>
function overloaded<T>(list_size: List<T> | number, size?: number): LL<T> | Fn<List<T>, LL<T>> {
  return curried(list_size, size)
}

export { overloaded as chunk }
