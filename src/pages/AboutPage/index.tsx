import type { NextPage } from 'next'

import Layout from 'src/components/Layout'
import { H1, P } from 'src/components/Typography'

const AboutPage: NextPage = () => {
  return (
    <Layout>
      <H1>About</H1>
      <P>
        Not so minimal boilerplate to start building any new
        <a href='https://nextjs.org/' target='_blank' rel='noopener noreferrer'>
          Next.js
        </a>{' '}
        project with styled-components and all: ; linting and testing tools
        ready, with a highly opinionated folder structure.
      </P>
    </Layout>
  )
}

export default AboutPage
