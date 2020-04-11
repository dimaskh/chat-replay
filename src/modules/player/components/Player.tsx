// Libs
import React from 'react'

// Styles
import styled from 'styled-components'

export class Player extends React.PureComponent<any> {
  public render() {
    return <StyledPlayer>Player</StyledPlayer>
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
