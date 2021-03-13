import { List } from '../list'
import { Fn } from '../../function'
import { OptionalTuple, zip } from './zip'
import { curry2 } from '../../util/util'

const curried = curry2(zip)

/**
 * Zip two lists
 * @template L the left list item type
 * @template R the right list item type
 * @param left A list
 * @param right A list
 * @return A list of tuples where each tuple has values from the corresponding * items in ```left``` and ```right```
 * If the lists are of different sizes, the returned list will have tuples where either ```left``` or ```right```
 * will be ```undefined```. This way, the list is guarantied to include tuples with left and right values.
 * See [[zipShort]] for comparison.
 */
function overloaded<L, R>(left: List<L>, right: List<R>): List<OptionalTuple<L, R>>
function overloaded<L, R>(right: List<R>): Fn<List<L>, List<OptionalTuple<L, R>>>
function overloaded<L, R>(
  left_right: List<L> | List<R>,
  right?: List<R>
): List<OptionalTuple<L, R>> | Fn<List<L>, List<OptionalTuple<L, R>>> {
  return curried<L, R>(left_right, right)
}

export { overloaded as zip }
