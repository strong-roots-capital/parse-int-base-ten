const test = require('ava')

/**
 * Library under test
 */

const parseIntBase10 = require('../src/parse-int-base-ten')


test('should throw error when not given non-string argument', t => {

    t.throws(() => parseIntBase10(1))
})
