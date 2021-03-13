import { keyBy as _keyBy } from 'lodash'
import { List } from '../list'
import { Fn } from '../../function'
import { Dictionary } from '../../dictionary'

export type Key<T> = Fn<T, string>

export const keyBy = <T>(list: List<T>, by: Key<T>): Dictionary<T> => _keyBy(list, by)
