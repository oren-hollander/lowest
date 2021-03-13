import { Dictionary } from '../dictionary'
import { Fn, Predicate } from '../../function'
import { filterDictionary } from './filterDictionary'
import { curry2 } from '../../util/curry'

const curried = curry2(filterDictionary)

function overloaded<T>(dict: Dictionary<T>, p: Predicate<T>): Dictionary<T>
function overloaded<T>(p: Predicate<T>): Fn<Dictionary<T>>
function overloaded<T>(dict_p: Dictionary<T> | Predicate<T>, p?: Predicate<T>): Dictionary<T> | Fn<Dictionary<T>> {
  return curried(dict_p, p)
}

export { overloaded as filterDictionary }
