import { List, Dictionary } from '../types'

export const fromPairs = <T>(pairs: List<[string, T]>): Dictionary<T> => Object.fromEntries(pairs)
