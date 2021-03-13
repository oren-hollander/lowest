import { List } from '../list'
import { Fn } from '../../function'

export const map = <I, O>(list: List<I>, f: Fn<I, O>): List<O> => list.map(f)
