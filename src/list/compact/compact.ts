import { filter } from '../filter/filter'
import { List } from '../list'
import { Nilable } from '../../util/util'

const isNotNil = (value: unknown): boolean => value !== null && value !== undefined

/**
 * Returns a list with null or undefined values removed
 * @param list The [[List]] to remove from
 * @return A list without null or undefined values
 */
export const compact = <T>(list: List<Nilable<T>>): List<T> => filter(list, isNotNil) as List<T>
