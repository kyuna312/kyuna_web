import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Kyuna's homepage" />
        <meta name="author" content="Kyuna" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Kyuna" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@m1or3n" />
        <meta name="twitter:creator" content="@m1or3n" />
        <meta property="og:site_name" content="Kyuna" />
        <meta name="og:title" content="Kyuna" />
        <meta property="og:type" content="website" />
        <title>Kyuna - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.md" >
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
