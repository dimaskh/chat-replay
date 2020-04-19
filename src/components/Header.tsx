// Libs
import React from 'react'

// Utils
import styled from 'styled-components'

export type Props = {
  children: string
  medium?: boolean
  small?: boolean
}

export const Header: React.FC<Props> = ({ children, ...props }: Props) => (
  <StyledHeader {...props}>{children}</StyledHeader>
)

export const StyledHeader = styled.header`
  background-color: #282c34;
  height: ${(props: Props) => {
    if (props.medium) return '60px'
    if (props.small) return '40px'
    return '100px'
  }};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: ${(props: Props) => {
    if (props.medium) return '20px'
    if (props.small) return '12px'
    return '32px'
  }};
  color: white;
  text-align: center;
  border-bottom: 1px solid #737373;
  width: 100%;
`

export default Header
