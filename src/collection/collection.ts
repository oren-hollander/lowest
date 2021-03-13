import { Dictionary } from '../dictionary'
import { List } from '../list'

/**
 * A read only [[List]] or [[Dictionary]]
 */
export type Collection<T> = Dictionary<T> | List<T>
