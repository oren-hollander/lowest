import { uniq as _uniq } from 'lodash'
import { List } from '../types'

export const uniq = <T>(list: List<T>): List<T> => _uniq(list)
