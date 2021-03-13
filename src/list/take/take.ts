import { List } from '../list'

export const take = <T>(list: List<T>, size: number): List<T> => {
  if (size < 0) {
    throw new Error('size must be a non negative number')
  } else if (size === list.length) {
    return list
  } else {
    return list.slice(0, size)
  }
}
