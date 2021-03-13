import { flatMap as _flatMap } from 'lodash'
import { List } from '../list'
import { Fn } from '../../function'

export const flatMap = <I, O>(list: List<I>, f: Fn<I, List<O>>): List<O> => _flatMap(list, f)
