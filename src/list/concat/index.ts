import { List } from '../list'
import { Fn } from '../../function'
import { concat } from './concat'
import { curry2 } from '../../util/util'

const curried = curry2(concat)

function overloaded<T>(toList: List<T>, list: List<T>): List<T>
function overloaded<T>(list: List<T>): Fn<List<T>>
function overloaded<T>(toList_list: List<T>, list?: List<T>): List<T> | Fn<List<T>> {
  return curried(toList_list, list)
}

export { overloaded as concat }
