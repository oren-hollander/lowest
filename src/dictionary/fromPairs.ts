import { List, Dictionary, Pair } from '../types'

export const fromPairs = <T>(pairs: List<Pair<T>>): Dictionary<T> => Object.fromEntries(pairs)
