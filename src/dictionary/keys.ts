import { Dictionary } from '../types'
import { toPairs } from './toPairs'
import { flow } from '../function'
import { map, List } from '../list'
import { getPairKey } from '../util'

export const keys = (dict: Dictionary<unknown>): List<string> => flow(dict, toPairs, map(getPairKey))
