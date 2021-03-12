import { Dictionary } from '../types'
import { toPairs } from './toPairs'
import { flow } from '../function'
import { getPairValue } from '../util'
import { List, map } from '../list'

export const values = <T>(dict: Dictionary<T>): List<T> => flow(dict, toPairs, map(getPairValue))
