import { Collection } from '../collection'
import { values } from '../dictionary'
import { Fn } from '../function'

export type List<T> = ReadonlyArray<T>

export type Tuple<L, R> = [L, R]

export const isList = <T>(collection: Collection<T>): collection is List<T> => Array.isArray(collection)
export const asList = <T>(collection: Collection<T>): List<T> => (isList(collection) ? collection : values(collection))

export type Key<T> = Fn<T, string>
