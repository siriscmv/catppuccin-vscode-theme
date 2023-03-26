import rawLatte from './latte'
import rawFrappe from './frappe'
import rawMacchiato from './macchiato'
import rawMocha from './mocha'

export type Scheme = typeof rawLatte

export const latte: Scheme = rawLatte
export const frappe: Scheme = rawFrappe
export const macchiato: Scheme = rawMacchiato
export const mocha: Scheme = rawMocha

export { alphaBlend } from './color'
