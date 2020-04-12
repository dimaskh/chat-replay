// Libs
import React from 'react'

// Components
import Chat from 'modules/chat/components/Chat'
import Player from 'modules/player/containers/Player'
import UsersList from 'modules/users/components/UsersList'

// Styles
import styled from 'styled-components'

export const Content: React.FC = () => (
  <StyledContent>
    <Player />
    <UsersList />
    <Chat />
  </StyledContent>
)

const StyledContent = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  background-color: #282c34;
`

export default Content
