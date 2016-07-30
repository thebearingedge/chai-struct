import { matches, diff } from 'type-diff'


export default function chaiStruct(chai, utils) {

  const { Assertion, assert } = chai

  utils.addMethod(Assertion.prototype, 'structure', function (Struct) {
    const isMatch = matches(Struct, this._obj)
    if (!isMatch) assert(isMatch, format(diff(Struct, this._obj)))
  })
}

const format = result => {
  const json = JSON.stringify(result, null, 2)
  return `Unexpected structure:\n${json}`
}
