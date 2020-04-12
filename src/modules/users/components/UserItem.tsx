// Libs
import React from 'react'

// Components
import { ChatItem } from 'react-chat-elements'

// Styles
import styled from 'styled-components'

export class UserItem extends React.PureComponent<any> {
  public render() {
    return <StyledUserItem>{this.renderContent()}</StyledUserItem>
  }

  private renderContent = (): JSX.Element => {
    const { user } = this.props

    return <ChatItem avatarFlexible title={user.user_name} />
  }
}

export const StyledUserItem = styled.div``

export default UserItem
