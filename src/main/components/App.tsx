// Libs
import React from 'react'

// Components
import Content from './Content'
import Header from './Header'

// Styles
import styled from 'styled-components'

export const App: React.FC = () => (
  <StyledApp>
    <Header />
    <Content />
  </StyledApp>
)

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export default App
