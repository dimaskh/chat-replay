// Libs
import React from 'react'

// Styles
import styled from 'styled-components'

export default class ErrorBoundary extends React.PureComponent {
  public state = {
    error: null,
    info: null,
  }

  public componentDidCatch(error: any, info: any) {
    this.setState({ error, info })
  }

  public render() {
    const { error } = this.state

    if (error) {
      return <ErrorBoundaryFallbackComponent />
    }

    return this.props.children
  }
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Message = styled.div`
  padding: 40px;
  border: 2px #78909c solid;
  border-radius: 5px;
  font-size: 24px;
  color: #78909c;
`

const ErrorBoundaryFallbackComponent = () => (
  <Container>
    <Message>
      Some Error Occurred
      <span role="img" aria-label="face-emoji">
        😞
      </span>
    </Message>
  </Container>
)
