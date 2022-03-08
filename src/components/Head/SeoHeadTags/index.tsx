import React from 'react'
import Head from 'next/head'

type Props = {
  pageTitle: string
  description: string
}

const SeoHeadTags: React.FC<Props> = ({ pageTitle, description }) => {
  return (
    <Head>
      <title key='title'>
        {pageTitle}
        {process.env.NODE_ENV === 'development'
          ? ` [${process.env.NODE_ENV}]`
          : ''}
      </title>{' '}
      <meta name='description' content={description} key='description'></meta>
    </Head>
  )
}

export default SeoHeadTags
