import Head from 'next/head';
import NavBar from '../navbar';
import { Box } from '@chakra-ui/react';
import Footer from '../footer';

const Main = ({ children, router }) => {
  const meta = {
    title: 'Kyuna',
    description: "Kyuna's homepage",
    author: 'Kyuna',
    twitter: {
      title: 'Kyuna',
      card: 'summary_large_image',
      site: '@m1or3n',
      creator: '@m1or3n',
    },
    og: {
      site_name: 'Kyuna',
      title: 'Kyuna',
      type: 'website',
    },
  };

  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={meta.description} />
        <meta name="author" content={meta.author} />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content={meta.twitter.title} />
        <meta name="twitter:card" content={meta.twitter.card} />
        <meta name="twitter:site" content={meta.twitter.site} />
        <meta name="twitter:creator" content={meta.twitter.creator} />
        <meta property="og:site_name" content={meta.og.site_name} />
        <meta name="og:title" content={meta.og.title} />
        <meta property="og:type" content={meta.og.type} />
        <title>{meta.title} - ホームページ</title>
      </Head>

      <NavBar path={router.asPath} />
      {children}
      <Footer />
    </Box>
  );
};

export default Main;
