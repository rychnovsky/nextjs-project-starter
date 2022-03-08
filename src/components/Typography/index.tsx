import styled, { css } from 'styled-components'

// Heading 1
export const H1Styles = css`
  font-size: 2rem;
  line-height: normal;
  letter-spacing: 0.025rem;
`

export const H1 = styled.h1`
  ${H1Styles};
`

// Heading 2
export const H2Styles = css`
  font-size: 1.6rem;
  line-height: normal;
  letter-spacing: 0.025rem;
`
export const H2 = styled.h2`
  ${H2Styles};
`

// Heading 3
export const H3Styles = css`
  font-size: 1.4rem;
  line-height: normal;
  letter-spacing: 0.02rem;
`
export const H3 = styled.h3`
  ${H3Styles};
`

export const H4Styles = css`
  font-size: 1.4rem;
  line-height: normal;
  letter-spacing: 0.02rem;
`
export const H4 = styled.h4`
  ${H4Styles};
`

// Paragraph
interface IPProps {
  variant?: 'p2' | 'p3'
}
export const P1Styles = css`
  font-size: 1.4rem;
  line-height: 2.2rem;
  letter-spacing: 0.02rem;
`
export const P2Styles = css`
  font-size: 1.4rem;
  line-height: 2.2rem;
  letter-spacing: 0.075rem;
  opacity: 0.7;
`
export const P3Styles = css`
  font-size: 1.2rem;
  line-height: 1.8rem;
  letter-spacing: 0;
  opacity: 0.7;
`

export const PStyles = css<IPProps>`
  ${({ variant }) =>
    variant === 'p2' ? P2Styles : variant === 'p3' ? P3Styles : P1Styles}
`

export const P = styled.p<IPProps>`
  ${PStyles};
`
export const P2 = styled((props) => <P {...props} variant='p2' />)``
export const P3 = styled((props) => <P {...props} variant='p3' />)``
