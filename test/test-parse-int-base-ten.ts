import test from 'ava'
import { Maybe } from 'purify-ts/Maybe'

/**
 * Library under test
 */

import { parseIntBaseTen } from '../src/parse-int-base-ten'

test('should parse a base-ten integer from a string', t => {

    t.is(42, parseIntBaseTen('42').unsafeCoerce())

})

test('should be chain-able with an existing maybe monad', t => {

    const m = Maybe.fromNullable('42')
        .chain(parseIntBaseTen)
        .orDefault(69)

    t.is(42, m)
})
