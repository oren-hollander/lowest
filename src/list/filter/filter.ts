import { List } from '../list'
import { Predicate } from '../../function'

export const filter = <T>(list: List<T>, p: Predicate<T>): List<T> => list.filter(p)
