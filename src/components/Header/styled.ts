import styled, { css } from 'styled-components'

export const Header = styled.header`
  padding: 12px;
  background: #f5f5f5;
`

export const Ul = styled.ul`
  display: flex;
`

export const Li = styled.li<{ active: boolean }>`
  &:not(:first-child) {
    margin-left: 12px;
  }

  ${({ active, theme }) =>
    active &&
    css`
      color: ${theme.colors.alpha};
    `}
`
