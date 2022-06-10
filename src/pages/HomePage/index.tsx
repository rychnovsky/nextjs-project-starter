import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Layout from 'src/components/Layout'
import { H1 } from 'src/components/Typography'
import { publicImages } from 'src/static'

import * as S from './styled'

const HomePage: NextPage = () => {
  return (
    <Layout>
      <H1>
        Welcome to <a href='https://nextjs.org'>Next.js example project!</a>
      </H1>

      <S.ImgWrap>
        <Image
          src={publicImages.nextjs}
          alt='Next.js'
          width={250}
          height={100}
        />
      </S.ImgWrap>

      <ul>
        <li>Next.js</li>
        <li>Typescript</li>
        <li>Styled-Components</li>
        <li>
          Tooling
          <ul>
            <li>Prettier</li>
            <li>Eslint</li>
            <li>Stylelint</li>
          </ul>
        </li>
        <li>
          Git hooks
          <ul>
            <li>Husky</li>
            <li>Lint-staged</li>
          </ul>
        </li>
      </ul>
    </Layout>
  )
}

export default HomePage
