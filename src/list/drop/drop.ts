import { List } from '../list'

export const drop = <T>(list: List<T>, size: number): List<T> => {
  if (size < 0) {
    throw new Error('size must be a non negative number')
  } else if (size === 0) {
    return list
  } else {
    return list.slice(size)
  }
}
