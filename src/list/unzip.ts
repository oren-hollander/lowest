import { unzip as _unzip } from 'lodash'
import { List, Tuple } from './list'

export const unzip = <L, R>(zipped: List<Tuple<L, R>>): Tuple<List<L>, List<R>> =>
  (_unzip(zipped) as unknown) as Tuple<List<L>, List<R>>
