import { invert as _invert } from 'lodash'
import { Dictionary } from '../dictionary'

export const invert = (dict: Dictionary<string | number>): Dictionary<string> => _invert(dict)
