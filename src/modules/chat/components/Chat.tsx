// Libs
import React from 'react'

// Components
import Header from 'components/Header'

// Styles
import styled from 'styled-components'

const MessageList = React.lazy(() => import('./MessageList'))

export class Chat extends React.PureComponent<any> {
  public render() {
    return (
      <StyledChat>
        <Header medium>Chat Replay</Header>
        {this.renderContent()}
      </StyledChat>
    )
  }

  private renderContent = (): JSX.Element => {
    const { messages } = this.props

    return <MessageList className="message-list" dataSource={messages} />
  }
}

export const StyledChat = styled.div`
  display: flex;
  flex-direction: column;
  width: 55vw;
  height: 100%;
  color: white;
`

export default Chat
