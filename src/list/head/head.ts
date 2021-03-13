import { take } from '../take/take'
import { List } from '../list'

/**
 * Returns the first item in a list or throws an error if the list is empty
 * @param list A list
 * @return The first item in the list
 * @throws An error if the list is empty
 */
export const head = <T>(list: List<T>): T => {
  if (list.length === 0) {
    throw new Error('List is empty')
  } else {
    return take(list, 1)[0]
  }
}
