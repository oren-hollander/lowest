import { toPairs } from '../toPairs'
import { flow } from '../../function'
import { getPairValue } from '../../util/util'
import { List, map } from '../../list'
import { Dictionary } from '../dictionary'

export const values = <T>(dict: Dictionary<T>): List<T> => flow(dict, toPairs, map(getPairValue))
