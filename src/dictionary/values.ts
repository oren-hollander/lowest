import { Dictionary, List } from '../types'
import { toPairs } from './toPairs'
import { flow } from '../function'
import { map } from '../collection'
import { getPairValue } from '../util'

export const values = <T>(dict: Dictionary<T>): List<T> => flow(dict, toPairs, map(getPairValue))
