import { List } from '../types'
import { drop } from './drop'

export const tail = <T>(list: List<T>): List<T> => drop(list, 1)
