// Libs
import React from 'react'

// Components
import UserItem from './UserItem'

// Styles
import styled from 'styled-components'

// Types
import { User } from 'models/users/types'

type Props = {
  users: User[]
}

export class UsersList extends React.PureComponent<Props> {
  public static defaultProps = {
    users: [],
  }

  public render() {
    return <StyledUsersList>{this.renderContent()}</StyledUsersList>
  }

  private renderContent = (): JSX.Element[] => {
    const { users } = this.props

    return users.map((user: User) => <UserItem key={user.id} user={user} />)
  }
}

export const StyledUsersList = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vw;
  height: 100%;
  border: 1px solid black;
  color: white;
`

export default UsersList
