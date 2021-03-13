import { List } from '../list'
import { Fn } from '../../function'
import { drop } from './drop'
import { curry2 } from '../../util/util'

const curried = curry2(drop)

/**
 * Remove the first items from a list
 * @template T the item type
 * @param list A list
 * @param size The number of first items to remove
 * @return A new list without the first ```size``` items
 */
function overloaded<T>(list: List<T>, size: number): List<T>
function overloaded<T>(size: number): Fn<List<T>>
function overloaded<T>(list_size: List<T> | number, size?: number): List<T> | Fn<List<T>> {
  return curried(list_size, size)
}

export { overloaded as drop }
