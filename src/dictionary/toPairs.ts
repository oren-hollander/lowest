import { Dictionary, Pair } from '../types'
import { List } from '../list'

export const toPairs = <T>(dict: Dictionary<T>): List<Pair<T>> => Object.entries(dict)
