import { zip as _zip } from 'lodash'
import { List, Tuple } from '../list'
import { Maybe } from '../../util'

export type OptionalTuple<L, R> = Tuple<Maybe<L>, Maybe<R>>

export const zipNonMatching = <L, R>(left: List<L>, right: List<R>): List<OptionalTuple<L, R>> => _zip(left, right)
