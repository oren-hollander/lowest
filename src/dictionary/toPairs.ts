import { List, Dictionary } from '../types'

export const toPairs = <T>(dict: Dictionary<T>): List<[string, T]> => Object.entries(dict)
