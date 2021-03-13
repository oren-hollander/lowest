import { List } from '../../list'
import { Dictionary, Pair } from '../dictionary'

export const fromPairs = <T>(pairs: List<Pair<T>>): Dictionary<T> => Object.fromEntries(pairs)
