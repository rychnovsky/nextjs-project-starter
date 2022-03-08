import Head from 'next/head'
import Image from 'next/image'

import Header from '../Header'
import Footer from '../Footer'

import * as S from './styled'

const Layout: React.FC = ({ children }) => {
  return (
    <S.Wrap>
      <Header />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.Wrap>
  )
}

export default Layout
