import { AnyObject, List, filter, fromPairs, toPairs, flow, find } from '../..'
import { getEntryKey } from '../../dictionary/dictionary'

export const pick = <T extends AnyObject, K extends keyof T>(obj: T, keys: List<K>): Pick<T, K> =>
  flow(
    obj,
    toPairs,
    filter(pair => find(keys, key => key === getEntryKey(pair)) !== undefined),
    fromPairs
  ) as Pick<T, K>
