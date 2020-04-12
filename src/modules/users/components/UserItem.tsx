// Libs
import React from 'react'

// Components
import { ChatItem } from 'react-chat-elements'

// Getters
import { getDisplayName } from 'models/users/getters'

// Utils
import { Md5 } from 'ts-md5'

// Styles
import styled from 'styled-components'

export class UserItem extends React.PureComponent<any> {
  public render() {
    return <StyledUserItem>{this.renderContent()}</StyledUserItem>
  }

  private renderContent = (): JSX.Element => {
    const { user } = this.props

    const hash = Md5.hashStr(getDisplayName(user))

    return (
      <ChatItem
        avatar={`https://www.gravatar.com/avatar/${hash}?s=32&d=identicon&r=PG`}
        title={getDisplayName(user)}
        subtitle={'Online'}
      />
    )
  }
}

export const StyledUserItem = styled.div``

export default UserItem
