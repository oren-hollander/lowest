import { Dictionary } from '../types'
import { invert as _invert } from 'lodash'

export const invert = (dict: Dictionary<string | number>): Dictionary<string> => _invert(dict)
