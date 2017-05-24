import { describe, it } from 'global'
import chai, { expect, AssertionError } from 'chai'
import { chaiStruct, Optional, Nullable, Any } from '.'

chai.use(chaiStruct)
chai.should()

describe('chaiStruct', () => {

  it('does not throw if a value matches a Type', () => {
    const Type = { id: Number, name: Optional(String) }
    const value = { id: 1, name: 'foo' }
    const wontThrow = () => value.should.have.structure(Type)
    expect(wontThrow).not.to.throw()
  })

  it('throws if a value does not match a Type', () => {
    const Type = { id: Number, name: Nullable(String), favoriteColor: Any() }
    const value = { id: 1 }
    const willThrow = () => value.should.have.structure(Type)
    expect(willThrow).to.throw(AssertionError, 'Unexpected Type structure:')
  })

  it('throws if a Type is `undefined` or `null`', () => {
    const Type = null
    const value = 1
    const willThrow = () => value.should.have.structure(Type)
    expect(willThrow).to.throw(AssertionError, 'Type structure must be defined and non-null.')
  })

})
