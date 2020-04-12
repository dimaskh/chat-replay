// Libs
import React from 'react'

// Components
import Button from 'components/Button'

// Styles
import styled from 'styled-components'

type Props = {
  replayRecord: () => { type: string }
}

export class Player extends React.PureComponent<Props> {
  public render() {
    return (
      <StyledPlayer>
        <div style={{ marginBottom: 20 }}>{'Player'}</div>
        <Button onClick={this.startDefaultReplay} title={'Replay default record'} />
      </StyledPlayer>
    )
  }

  private startDefaultReplay = () => {
    const { replayRecord } = this.props

    replayRecord()
  }
}

export const StyledPlayer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;
  height: 100%;
  border: 1px solid black;
  color: white;
`

export default Player
