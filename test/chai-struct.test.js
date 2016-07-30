/* global describe, it */
import chai, { expect } from 'chai'
import chaiStruct from '../src/chai-struct'


chai.use(chaiStruct)
chai.should()

describe('chaiStruct', () => {

  it('does not throw if an Object matches a Struct', () => {

    const obj = {
      id: 1,
      name: 'foo'
    }

    const Struct = {
      id: Number,
      name: String
    }

    const wontThrow = () => obj.should.have.structure(Struct)

    expect(wontThrow).not.to.throw()
  })

  it('throws if an Object does not match a Struct', () => {

    const obj = {
      id: 1
    }

    const Struct = {
      id: Number,
      name: String
    }

    const willThrow = () => obj.should.have.structure(Struct)

    expect(willThrow).to.throw()
  })

})
