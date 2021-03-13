import { invert as _invert } from 'lodash'
import { Dictionary } from '../dictionary'

/**
 * Returns a new dictionary with the keys and values of ```dict``` inverted.
 * If ```dict``` contains duplicate values, one of them will be chosen arbitrarily.
 * @param dict A dictionary
 * @return An inverted dictionary
 */
export const invert = (dict: Dictionary<string | number>): Dictionary<string> => _invert(dict)
