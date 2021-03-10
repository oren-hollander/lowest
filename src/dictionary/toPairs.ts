import { List, Dictionary, Pair } from '../types'

export const toPairs = <T>(dict: Dictionary<T>): List<Pair<T>> => Object.entries(dict)
