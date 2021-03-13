import { drop } from '../drop/drop'
import { List } from '../list'

export const tail = <T>(list: List<T>): List<T> => drop(list, 1)
