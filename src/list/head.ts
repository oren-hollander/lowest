import { take } from './take'
import { List } from './list'

export const head = <T>(list: List<T>): T => {
  if (list.length === 0) {
    throw new Error('List is empty')
  } else {
    return take(list, 1)[0]
  }
}
