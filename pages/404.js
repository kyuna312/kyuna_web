import NextLink from 'next/link';
import {
  Image,
  Box,
  Container,
  Button
} from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Container>
      <Box
        textAlign="center"
        style={{
          background: '#222222',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          fontFamily: 'Trebuchet MS, sans-serif',
          padding: '10% 10% 10% 10%'
        }}
      >
        <Image src="https://c.tenor.com/Kun2CvljnYAAAAAC/error.gif" alt="Animated GIF" />
        <Box my={6}>
          <Button as={NextLink} href="/" colorScheme="teal">
            ホームに戻る
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default NotFound;
