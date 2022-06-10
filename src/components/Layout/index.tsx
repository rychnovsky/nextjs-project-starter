import { PropsWithChildren } from 'react'

import Header from '../Header'
import Footer from '../Footer'
import Container from '../Container'

import * as S from './styled'

type Props = PropsWithChildren<{}>

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <S.Wrap>
      <Header />
      <S.Main>
        <Container>{children}</Container>
      </S.Main>
      <Footer />
    </S.Wrap>
  )
}

export default Layout
