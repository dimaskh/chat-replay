// Libs
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

// Tested components
import Player from 'modules/player/components/Player'

describe('components/Player', () => {
  let component: any
  let props: any

  beforeEach(() => {
    props = {
      isFinished: false,
      isPlaying: false,
      clearData: jest.fn(),
      replayRecord: jest.fn(),
    }

    component = shallow(<Player {...props} />)
  })

  it('should render correctly', () => {
    expect(shallowToJson(component)).toMatchSnapshot()
  })

  it('should render popup if isFinished true', () => {
    component.setProps({ isFinished: true })

    expect(shallowToJson(component)).toMatchSnapshot()
  })

  it('should handle startDefaultReplay', () => {
    component.instance().startDefaultReplay()

    expect(props.replayRecord).toHaveBeenCalled()
  })

  it('should handle startDefaultReplay if isPlaying true', () => {
    component.setProps({ isPlaying: true })

    expect(props.replayRecord).not.toHaveBeenCalled()
  })
})
