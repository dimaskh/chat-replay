// Libs
import React from 'react'

// Components
import Header from 'components/Header'
import Content from './Content'

// Styles
import styled from 'styled-components'

export const App: React.FC = () => (
  <StyledApp>
    <Header>Chat Replay Application</Header>
    <Content />
  </StyledApp>
)

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export default App
