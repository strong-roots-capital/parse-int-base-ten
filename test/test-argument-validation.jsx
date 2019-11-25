const test = require('ava')

/**
 * Library under test
 */

const parseIntBaseTen = require('../src/parse-int-base-ten')


test('should throw error when not given non-string argument', t => {

    t.throws(() => parseIntBaseTen(1))
})
