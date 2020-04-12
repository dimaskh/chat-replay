// Libs
import React from 'react'

// Components
import { MessageList } from 'react-chat-elements'

// Styles
import styled from 'styled-components'

export class Chat extends React.PureComponent<any> {
  public render() {
    return (
      <div>
        {'Chat'}
        {this.renderContent()}
      </div>
    )
  }

  private renderContent = (): JSX.Element => {
    const { messages } = this.props

    return <MessageList className="message-list" lockable={true} toBottomHeight={'100%'} dataSource={messages} />
  }
}

export const StyledChat = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  color: white;
`

export default Chat
