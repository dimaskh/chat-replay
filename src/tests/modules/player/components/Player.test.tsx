// Libs
import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

// Tested components
import Player from 'modules/player/components/Player'

// Types
import { Props } from 'modules/player/components/Player'
import { ShallowWrapper } from 'enzyme'

describe('components/Player', () => {
  let component: ShallowWrapper<Props, {}, Player>
  let props: Props
  let instance: any

  beforeEach(() => {
    props = {
      isFinished: false,
      isPlaying: false,
      clearData: jest.fn(),
      replayRecord: jest.fn(),
    }

    component = shallow(<Player {...props} />)
    instance = component.instance()
  })

  it('should render correctly', () => {
    expect(shallowToJson(component)).toMatchSnapshot()
  })

  it('should render popup if isFinished true', () => {
    component.setProps({ isFinished: true })

    expect(shallowToJson(component)).toMatchSnapshot()
  })

  it('should handle startDefaultReplay', () => {
    instance.startDefaultReplay()

    expect(props.replayRecord).toHaveBeenCalled()
  })

  it('should handle startDefaultReplay if isPlaying true', () => {
    component.setProps({ isPlaying: true })
    instance.startDefaultReplay()

    expect(props.replayRecord).not.toHaveBeenCalled()
  })

  it('should compose popup buttons', () => {
    const buttons = instance.getPopupButtons()
    buttons[0].onClick()
    expect(props.clearData).toHaveBeenCalled()
  })
})
