import { find } from '../../collection'
import { flow } from '../../function'
import { fromPairs, toPairs } from '../../dictionary'
import { getEntryKey } from '../../dictionary/dictionary'
import { List, filter } from '../../list'
import { AnyObject } from '../object'

export const omit = <T extends AnyObject, K extends keyof T>(obj: T, keys: List<K>): Omit<T, K> =>
  flow(
    obj,
    toPairs,
    filter(pair => find(keys, key => key === getEntryKey(pair)) === undefined),
    fromPairs
  ) as Omit<T, K>
