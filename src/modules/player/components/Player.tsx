// Libs
import React from 'react'

// Components
import Header from 'components/Header'
import { Button, Popup } from 'react-chat-elements'

// Styles
import styled from 'styled-components'

export type Props = {
  isFinished: boolean
  isPlaying: boolean
  clearData: () => { type: string }
  replayRecord: () => { type: string }
}

export class Player extends React.PureComponent<Props> {
  public render() {
    const { isFinished } = this.props

    return (
      <StyledPlayer>
        <Header medium>Player</Header>
        <ButtonContainer>
          <Button onClick={this.startDefaultReplay} text={'Replay Default Record'} />
        </ButtonContainer>
        <Popup text={'Replay is finished'} show={isFinished} footerButtons={this.getPopupButtons()} />
      </StyledPlayer>
    )
  }

  private startDefaultReplay = () => {
    const { isPlaying, replayRecord } = this.props

    if (isPlaying) {
      return
    }

    replayRecord()
  }

  private getPopupButtons = () => {
    const { clearData } = this.props

    const ok = {
      color: 'black',
      text: 'OK',
      onClick: () => clearData(),
    }

    return [ok]
  }
}

export const ButtonContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledPlayer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 100%;
  border-right: 1px solid #616161;
  color: white;
`

export default Player
