chai-struct
---
Chai assertion for Object structures

[![Build Status](https://travis-ci.org/thebearingedge/chai-struct.svg?branch=master)](https://travis-ci.org/thebearingedge/chai-struct.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/thebearingedge/chai-struct/badge.svg?branch=master)](https://coveralls.io/github/thebearingedge/chai-struct?branch=master)

## Usage

Verify that data has a given structure.

```javascript
describe('my data', () => {

  const fanbois = {
    id: 1,
    groupTitle: 'JS Fanbois',
    members: [
      { username: 'brendaneich' },
      { username: 'douglascrockford' }
    ]
  }

  it('has the correct structure!', () => {

    expect(fanbois).to.have.structure({
      id: Number,
      groupTitle: String,
      members: [{ username: String }]
    })
  })

  it('has the correct structure?', () => {

    expect(fanbois).to.have.structure({
      id: Number,
      groupTitle: String,
      members: [{ username: Boolean }] // <- this ain't right
    })

    /**
     * 1) my data has the correct structure?:
     * AssertionError: Unexpected structure:
     * {
     *   "members": {
     *     "0": {
     *       "username": {
     *         "actual": "String",
     *         "expected": "Boolean",
     *         "value": "brendaneich"
     *       }
     *     }
     *   }
     * }
     */

  })

})
```
