// Libs
import React from 'react'

// Styles
import styled from 'styled-components'

export class UsersList extends React.PureComponent<any> {
  public render() {
    return <StyledUsersList>Users List</StyledUsersList>
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
