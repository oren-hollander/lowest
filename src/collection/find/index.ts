import { Collection } from '../collection'
import { Fn, Predicate } from '../../function'
import { Maybe } from '../../util'
import { find } from './find'
import { curry2 } from '../../util/curry'

const curried = curry2(find)

function overloaded<T>(col: Collection<T>, p: Predicate<T>): Maybe<T>
function overloaded<T>(p: Predicate<T>): Fn<Collection<T>, Maybe<T>>
function overloaded<T>(col_p: Collection<T> | Predicate<T>, p?: Predicate<T>): Maybe<T> | Fn<Collection<T>, Maybe<T>> {
  return curried(col_p, p)
}

export { overloaded as find }
