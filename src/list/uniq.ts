import { uniq as _uniq } from 'lodash'
import { List } from './list'

export const uniq = <T>(list: List<T>): List<T> => _uniq(list)
