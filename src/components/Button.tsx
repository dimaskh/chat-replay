// Libs
import React from 'react'

// Styles
import styled from 'styled-components'

type Props = {
  /** Button title string */
  title: string
  /** Function that handles onClick */
  onClick: () => void
}

export const Button: React.FC<Props> = ({ title = '', onClick }: Props) => (
  <StyledButton onClick={onClick}>{title}</StyledButton>
)

const StyledButton = styled.div`
  color: red;
  cursor: pointer;
  user-select: none;
  background-color: #f18844;
  color: black;
  width: 180px;
`

export default Button
