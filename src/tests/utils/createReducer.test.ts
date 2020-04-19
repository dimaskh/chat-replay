// Utils
import createReducer from 'utils/createReducer'

describe('utils/createReducer', () => {
  const mockAction = { type: 'testAction' }

  describe('should work without arguments', () => {
    const reducer: Function = createReducer()

    it('reducer should be a function', () => {
      expect(reducer).toBeInstanceOf(Function)
    })

    it('reducer should work with null state', () => {
      expect(reducer(null, mockAction)).toEqual(null)
    })

    it('reducer should work with correct arguments', () => {
      expect(reducer({}, mockAction)).toEqual({})
    })
  })

  describe('should work with correct arguments', () => {
    const mockHandlers = { testAction: jest.fn().mockReturnValueOnce({}) }
    const reducer: Function = createReducer({}, mockHandlers)

    it('reducer should be a function', () => {
      expect(reducer).toBeInstanceOf(Function)
    })

    it('reducer should work without arguments', () => {
      expect(reducer()).toEqual({})
    })

    it('reducer should work without action', () => {
      expect(reducer({})).toEqual({})
    })

    it('reducer should work if unknown action was passed', () => {
      expect(reducer({}, { type: 'unknownAction' })).toEqual({})
    })

    it('reducer should work with correct arguments', () => {
      expect(reducer({}, mockAction)).toEqual({})
      expect(mockHandlers.testAction).toHaveBeenCalledWith({}, mockAction)
    })
  })
})
