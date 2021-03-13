import { asList } from '../../list/list'
import { Predicate } from '../../function'
import { Collection } from '../collection'

export const every = <T>(col: Collection<T>, p: Predicate<T>): boolean => asList(col).every(p)
