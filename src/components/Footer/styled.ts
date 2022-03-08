import styled from 'styled-components'

export const Footer = styled.footer`
  padding: 12px;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
`
