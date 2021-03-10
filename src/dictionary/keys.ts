import { Dictionary, List } from '../types'
import { toPairs } from './toPairs'
import { flow } from '../function'
import { map } from '../collection'
import { getPairKey } from '../util'

export const keys = (dict: Dictionary<unknown>): List<string> => flow(dict, toPairs, map(getPairKey))
