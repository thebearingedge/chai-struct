import { diff } from 'type-diff'

export function chaiStruct({ Assertion, AssertionError, assert }, utils) {

  utils.addMethod(Assertion.prototype, 'structure', function (Type) {
    if (Type == null) {
      throw new AssertionError('Type structure must be defined and non-null.')
    }
    const result = diff(Type, this._obj)
    assert(!result, format(result))
  })
}

const format = result => {
  const json = JSON.stringify(result, null, 2)
  return `Unexpected Type structure:\n${json}`
}

export { Optional, Nullable, Any } from 'type-diff'
