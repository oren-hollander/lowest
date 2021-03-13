/**
 * A read only dictionary
 */
export type Dictionary<T> = {
  readonly [key: string]: T
}

/**
 * A key and value pair - a dictionary entry
 */
export type Pair<T> = [string, T]
