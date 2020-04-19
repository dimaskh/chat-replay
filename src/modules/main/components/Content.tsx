// Libs
import React from 'react'

// Styles
import styled from 'styled-components'

// Components
const Chat = React.lazy(() => import('modules/chat/containers/Chat'))
const Player = React.lazy(() => import('modules/player/containers/Player'))
const UsersList = React.lazy(() => import('modules/users/containers/Users'))

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
