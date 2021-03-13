import { toPairs } from './toPairs'
import { flow } from '../function'
import { map, List } from '../list'
import { getPairKey } from '../util/util'
import { Dictionary } from './dictionary'

export const keys = (dict: Dictionary<unknown>): List<string> => flow(dict, toPairs, map(getPairKey))
