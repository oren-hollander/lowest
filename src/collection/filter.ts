import { Collection, Dictionary, List, Predicate, Fn } from '../types'
import { isList, overPairValues, transformDictionary } from '../util'

type Filter<T> = {
  (dict: Dictionary<T>): Dictionary<T>
  (list: List<T>): List<T>
}

const filterCollection = <T>(collection: Collection<T>, p: Predicate<T>): Collection<T> =>
  isList(collection)
    ? collection.filter(p)
    : transformDictionary(collection, values => values.filter(overPairValues(p)))

export function filter<T>(list: List<T>, p: Predicate<T>): List<T>
export function filter<T>(dict: Dictionary<T>, p: Predicate<T>): Dictionary<T>
export function filter<T>(p: Predicate<T>): Filter<T>
export function filter<T>(
  list_dict_p: Collection<T> | Predicate<T>,
  p?: Predicate<T>
): Collection<T> | Fn<List<T>> | Fn<Dictionary<T>> {
  if (p) {
    return filterCollection(list_dict_p as Collection<T>, p)
  } else {
    const p = list_dict_p as Predicate<T>
    return (collection: Collection<T>) => filterCollection(collection, p) as List<T> & Dictionary<T>
  }
}

/**
 * Filters the collection by keeping all items which satisfy the predicate
 * @param p The [[Predicate]]
 * @return A function accepting the [[Collection]] to filter
 *
 * The returned function returns the same type it accepts
 * Example:
 *
 * ```typescript
 * const predicate = (x: number): boolean => x > 1
 * const moreThanOne = filter(predicate)
 *
 * const list: List<number> = [1, 2, 3]
 * const r1 = moreThanOne(list)
 *
 * const dict: Dictionary<number> = { a: 1, b: 2, c: 3 }
 * const r2 = moreThanOne(dict)
 *
 * const listCol = [1, 2, 3] as Collection<number>
 * const r3 = moreThanOne(listCol)
 *
 * const dictCol = { a: 1, b: 2, c: 3 } as Collection<number>
 * const r4 = moreThanOne(dictCol)
 * ```
 *
 * Variable          | Static type  | Dynamic type
 * ----------------- | ------------ | ------------
 * list <br/> r1     | List         | List
 * dict <br/> r2     | Dictionary   | Dictionary
 * listCol <br/> r3  | Collection   | List
 * dictCol <br/> r4  | Collection   | Dictionary
 */
