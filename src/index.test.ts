import { chaiStruct, Optional, Nullable, Any } from '.'
import chai, { expect, AssertionError } from 'chai'

chai.use(chaiStruct)
chai.should()

describe('chaiStruct', () => {

  it('does not throw if a value matches a Type', () => {
    const description = {
      id: Number,
      name: Optional(String)
    }
    const value = { id: 1, name: 'foo' }
    const wontThrow = (): void => {
      value.should.have.structure(description)
    }
    expect(wontThrow).not.to.throw()
  })

  it('throws if a value does not match a Type', () => {
    const description = {
      id: Number,
      name: Nullable(String),
      favoriteColor: Any()
    }
    const value = { id: 1 }
    const willThrow = (): void => {
      value.should.have.structure(description)
    }
    expect(willThrow).to.throw(AssertionError, /^unexpected type structure:/)
  })

})
