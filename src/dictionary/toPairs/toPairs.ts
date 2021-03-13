import { List } from '../../list'
import { Dictionary, Pair } from '../dictionary'

export const toPairs = <T>(dict: Dictionary<T>): List<Pair<T>> => Object.entries(dict)
