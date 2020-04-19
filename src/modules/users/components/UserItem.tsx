// Libs
import React from 'react'

// Components
import { ChatItem } from 'react-chat-elements'

// Getters
import { getDisplayName } from 'models/users/getters'

// Utils
import { Md5 } from 'ts-md5'

// Types
import { User } from 'models/users'

export type Props = {
  user: User
  date?: string
}

export default class UserItem extends React.PureComponent<Props> {
  public render() {
    const { date, user } = this.props

    return <ChatItem avatar={this.getAvatar()} date={date} title={getDisplayName(user)} subtitle={'Online'} />
  }

  private getAvatar = (): string => {
    const { user } = this.props
    const hash = Md5.hashStr(getDisplayName(user))

    return `https://www.gravatar.com/avatar/${hash}?s=32&d=identicon&r=PG`
  }
}
