import { Collection } from '../collection'
import { Fn, Predicate } from '../../function'
import { some } from './some'
import { curry2 } from '../../util/curry'

const curried = curry2(some)

function overloaded<T>(collection: Collection<T>, p: Predicate<T>): boolean
function overloaded<T>(p: Predicate<T>): Fn<Collection<T>, boolean>
function overloaded<T>(
  collection_p: Collection<T> | Predicate<T>,
  p?: Predicate<T>
): boolean | Fn<Collection<T>, boolean> {
  return curried(collection_p, p)
}

export { overloaded as some }
