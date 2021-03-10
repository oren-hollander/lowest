import { List } from '../types'
import { take } from './take'

export const head = <T>(list: List<T>): T => {
  if (list.length === 0) {
    throw new Error('List is empty')
  } else {
    return take(list, 1)[0]
  }
}
