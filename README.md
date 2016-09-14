chai-struct
---
Chai assertion for Object structures

[![Build Status](https://travis-ci.org/thebearingedge/chai-struct.svg?branch=master)](https://travis-ci.org/thebearingedge/chai-struct.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/thebearingedge/chai-struct/badge.svg?branch=master)](https://coveralls.io/github/thebearingedge/chai-struct?branch=master)

## Usage

Verify that data has a given structure.

```javascript
import chai, { expect } from 'chai'
import { chaiStruct } from 'chai-struct'

chai.use(chaiStruct)

describe('my data', () => {

  const fanbois = {
    id: 1,
    groupName: 'JS Fanbois',
    members: [
      { username: 'brendaneich' },
      { username: 'douglascrockford' },
      { username: true } // <- this ain't right
    ]
  }

  it('has the correct structure?', () => {
    expect(fanbois).to.have.structure({
      id: Number,
      groupName: String,
      members: [{ username: String }]
    })
    /**
     * 1) my data has the correct structure?:
     * AssertionError: Unexpected structure:
     * {
     *   "members": {
     *     "0": {
     *       "username": {
     *         "actual": "Boolean",
     *         "expected": "String",
     *         "value": "true"
     *       }
     *     }
     *   }
     * }
     */
  })

})
```

Supports `Optional`, `Nullable`, and `Any` types from [`type-diff`](https://github.com/thebearingedge/type-diff).
