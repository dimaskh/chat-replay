import composeGetter from 'utils/composeGetter'

describe('utils/composeGetter', () => {
  const mockObject = { testProp: 'testValue' }

  describe('it should work when getter composed with invalid prop', () => {
    const getter: Function = composeGetter('invalidProp')

    it('getter should return undefined if empty object passed', () => {
      expect(getter({})).toBeUndefined()
    })

    it('getter should return undefined if default value was not provided', () => {
      expect(getter(mockObject)).toBeUndefined()
    })

    it('getter should return default value if it was provided', () => {
      expect(getter(mockObject, 'defaultValue')).toEqual('defaultValue')
    })
  })

  describe('it should work when getter composed with valid prop', () => {
    const getter: Function = composeGetter('testProp')

    it('getter should return undefined if empty object passed', () => {
      expect(getter({})).toBeUndefined()
    })

    it('getter should return value if correct object passed', () => {
      expect(getter(mockObject)).toEqual('testValue')
    })
  })
})
