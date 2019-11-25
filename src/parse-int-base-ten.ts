/**
 * parse-int-base-ten
 * Use the Maybe monady to parse a base-10 integer
 */

import { Maybe } from 'purify-ts/Maybe'

const isString = (value: unknown): value is string =>
    Object.prototype.toString.call(value) === '[object String]'


/**
 * Parse base-ten integer out of `value` if possible.
 *
 * @param value String representation of a number
 * @returns Number represented by `value`
 */
export function parseIntBaseTen(value: string): Maybe<number> {

    if (!isString(value)) {
        throw new Error(`Expected argument to be a string, got '${value}'`)
    }

    return Maybe.fromNullable(Number.parseInt(value, 10))
}
