import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.container.maxWidth}px;
`
