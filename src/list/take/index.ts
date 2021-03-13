import { List } from '../list'
import { Fn } from '../../function'
import { take } from './take'
import { curry2 } from '../../util/util'

const curried = curry2(take)

/**
 * Takes first items from the list
 * @template T The list item type
 * @param list A list
 * @param size The number if items to take
 * @return A new list containing the first ```size``` items from ```list```
 */
function overloaded<T>(list: List<T>, size: number): List<T>
function overloaded<T>(size: number): Fn<List<T>>
function overloaded<T>(list_size: List<T> | number, size?: number): List<T> | Fn<List<T>> {
  return curried(list_size, size)
}

export { overloaded as take }
