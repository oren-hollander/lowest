import { unzip as _unzip } from 'lodash'
import { List, Tuple } from '../list'

/**
 * Unzip a list of tuples
 * @template L the left list item type
 * @template R the right list item type
 * @param zipped A list of tuples
 * @return a tuple of lists
 */
export const unzip = <L, R>(zipped: List<Tuple<L, R>>): Tuple<List<L>, List<R>> =>
  (_unzip(zipped) as unknown) as Tuple<List<L>, List<R>>
