import { groupBy as _groupBy } from 'lodash'
import { Key, List } from '../list'
import { Dictionary } from '../../dictionary'

export type Grouped<T> = Dictionary<List<T>>

export const groupBy = <T>(list: List<T>, by: Key<T>): Grouped<T> => _groupBy(list, by)
