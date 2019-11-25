
parse-int-base-ten [![Build status](https://travis-ci.org/strong-roots-capital/parse-int-base-ten.svg?branch=master)](https://travis-ci.org/strong-roots-capital/parse-int-base-ten) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/parse-int-base-ten.svg)](https://npmjs.org/package/@strong-roots-capital/parse-int-base-ten) [![codecov](https://codecov.io/gh/strong-roots-capital/parse-int-base-ten/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/parse-int-base-ten)
=============================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

> Use the Maybe monady to parse a base-10 integer

Install
-------

```shell
npm install @strong-roots-capital/parse-int-base-ten
```

Use
---

```typescript
import { parseIntBaseTen } from '@strong-roots-capital/parse-int-base-ten'
// TODO: describe usage
```

Related
-------

TODO

Acknowledgments
---------------

TODO

## Index

### Functions

* [parseIntBaseTen](#parseintbaseten)

---

## Functions

<a id="parseintbaseten"></a>

###  parseIntBaseTen

▸ **parseIntBaseTen**(value: *`string`*): `Maybe`<`number`>

*Defined in [parse-int-base-ten.ts:18](https://github.com/strong-roots-capital/parse-int-base-ten/blob/6c3eed2/src/parse-int-base-ten.ts#L18)*

Parse base-ten integer out of `value` if possible.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `string` |  String representation of a number |

**Returns:** `Maybe`<`number`>
Number represented by `value`

___

