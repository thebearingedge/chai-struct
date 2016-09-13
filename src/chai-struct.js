import { diff } from 'type-diff'

export default function chaiStruct({ Assertion, assert }, utils) {

  utils.addMethod(Assertion.prototype, 'structure', function (Type) {
    const result = diff(Type, this._obj)
    assert(!result, format(result))
  })
}

const format = result => {
  const json = JSON.stringify(result, null, 2)
  return `Unexpected Type structure:\n${json}`
}
