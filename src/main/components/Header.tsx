// Libs
import React from 'react'

// Utils
import styled from 'styled-components'

export const Header: React.FC = () => (
  <StyledHeader>
    <p>Chat Replay Application</p>
  </StyledHeader>
)

const StyledHeader = styled.header`
  background-color: #282c34;
  height: 100px;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  color: white;
  text-align: center;
`

export default Header
