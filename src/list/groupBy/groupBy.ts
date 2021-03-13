import { groupBy as _groupBy } from 'lodash'
import { List } from '../list'
import { Fn } from '../../function'
import { Dictionary } from '../../dictionary'

export type Grouped<T> = Dictionary<List<T>>
export type Key<T> = Fn<T, string>

export const groupBy = <T>(list: List<T>, by: Key<T>): Grouped<T> => _groupBy(list, by)
