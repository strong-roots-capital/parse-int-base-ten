import test from 'ava'
import { Maybe } from 'purify-ts/Maybe'

/**
 * Library under test
 */

import { parseIntBase10 } from '../src/parse-int-base-ten'

test('should parse a base-ten integer from a string', t => {

    t.is(42, parseIntBase10('42').unsafeCoerce())

})

test('should be chain-able with an existing maybe monad', t => {

    const m = Maybe.fromNullable('42')
        .chain(parseIntBase10)
        .orDefault(69)

    t.is(42, m)
})
