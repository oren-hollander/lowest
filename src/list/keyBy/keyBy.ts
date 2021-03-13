import { keyBy as _keyBy } from 'lodash'
import { Key, List } from '../list'
import { Dictionary } from '../../dictionary'

export const keyBy = <T>(list: List<T>, by: Key<T>): Dictionary<T> => _keyBy(list, by)
