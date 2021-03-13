import { values } from '../../dictionary'
import { Predicate } from '../../function'
import { Collection } from '../collection'
import { isList } from '../../list/list'
import { Maybe } from '../../util'

export const find = <T>(col: Collection<T>, p: Predicate<T>): Maybe<T> =>
  isList(col) ? col.find(p) : values(col).find(p)
