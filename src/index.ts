import * as chai from 'chai'
import { diff } from 'type-diff'
import { Description } from 'type-diff/dist/helpers'

declare global {
  export namespace Chai {
    interface Assertion {
      structure: (description: Description) => Assertion
    }
  }
}

type Diff = ReturnType<typeof diff>
type Assertion = Chai.AssertionStatic

function formatDiff(differences: Diff): string {
  return `unexpected type structure:\n${JSON.stringify(differences, null, 2)}`
}

function structure(this: Assertion, description: Description): Assertion {
  const differences = diff(description, this._obj)
  chai.assert(differences == null, formatDiff(differences))
  return this
}

export function chaiStruct(_chai: Chai.ChaiStatic, utils: Chai.ChaiUtils): void {
  utils.addMethod(_chai.Assertion.prototype, 'structure', structure)
}

export { Optional, Nullable, Any } from 'type-diff'
