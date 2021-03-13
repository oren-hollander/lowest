import { List } from '../list'

export const concat = <T>(toList: List<T>, list: List<T>): List<T> => toList.concat(list)
