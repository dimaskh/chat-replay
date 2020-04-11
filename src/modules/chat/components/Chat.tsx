// Libs
import React from 'react'

// Styles
import styled from 'styled-components'

export class Chat extends React.PureComponent<any> {
  public render() {
    return <StyledChat>Chat</StyledChat>
  }
}

export const StyledChat = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  color: white;
`

export default Chat
