import { Dictionary, Pair } from '../types'
import { List } from '../list'

export const fromPairs = <T>(pairs: List<Pair<T>>): Dictionary<T> => Object.fromEntries(pairs)
