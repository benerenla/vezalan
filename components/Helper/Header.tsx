import { CONFIG } from '@/libs/config'
import Head from 'next/head'
import React from 'react'

export const Header: React.FC<Props.IHeaderProps> = ({ title, meta }) => {
  return (
    <Head>
      <title>{title ? title : CONFIG.default_title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
        rel="stylesheet"
      />
      {meta && (
        <>
          {meta.title && (
            <>
              <meta property="og:title" content={meta.title} />
              <meta property="og:description" content={meta.description} />
              <meta property="og:image" content={meta.image} />
              <meta
                data-n-head="ssr"
                data-hid="og:site_name"
                name="og:site_name"
                content={meta.name}
              ></meta>
            </>
          )}
        </>
      )}
    </Head>
  )
}
