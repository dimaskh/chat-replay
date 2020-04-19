// Libs
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

// Tested components
import ErrorBoundary, { ErrorBoundaryFallbackComponent } from 'components/ErrorBoundary'

describe('When no errors are caught in a child component', () => {
  let ErrorBoundaryComponent: any

  beforeAll(() => {
    ErrorBoundaryComponent = shallow(
      <ErrorBoundary>
        <h1>child</h1>
      </ErrorBoundary>
    )
  })

  it('should render the child component', () => {
    expect(ErrorBoundaryComponent.find('h1').exists()).toBeTruthy()
  })
})

describe('When error is caught in a child component', () => {
  let ErrorBoundaryComponent: any

  beforeAll(() => {
    jest.spyOn(global.console, 'log')
    ErrorBoundaryComponent = shallow(
      <ErrorBoundary>
        <h1>child</h1>
      </ErrorBoundary>
    )
    ErrorBoundaryComponent.instance().componentDidCatch('no errors')
    ErrorBoundaryComponent.update()
  })

  it('should log an error to console', () => {
    expect(global.console.log).toHaveBeenCalledWith('no errors')
  })

  it('should update the state to indicate an error', () => {
    expect(ErrorBoundaryComponent.instance().state.error).toBeTruthy()
  })

  it('should not render the child component', () => {
    expect(ErrorBoundaryComponent.find('h1').exists()).toBeFalsy()
  })

  describe('ErrorBoundaryFallbackComponent component', () => {
    it('should render correctly', () => {
      const component = shallow(<ErrorBoundaryFallbackComponent />)

      expect(shallowToJson(component)).toMatchSnapshot()
    })
  })
})
