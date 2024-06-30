import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image';
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container paddingTop={20} >
      <Box
        borderRadius="md"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('transparent', 'transparent')}
        css={{ backdropFilter: 'blur(100px)' }}
      >
        Kernel Enjoyer
      </Box>
  
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title" >
            <Box>
              <Image src="/images/真夜_.png" width={70} height={70} alt="Picture of the author" />
  
            </Box>
          </Heading>
          <p>Kernel Enjoyer Geek (Developer / Designer / Anime Fan)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <Image
              src="/images/amane.jpg"
              alt="Profile image"
              width={100}
              height={100}
            />
          </Box>
        </Box>
      </Box>
  
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <p>
          Amane is a full-stack developer based in Ulaanbaatar with a passion for
          building digital services/stuff he wants. He has a knack for all things
          launching products, from planning and designing all the way to solving
          real-life problems with code. When not online, he loves hanging out with
          his camera. Currently, he is living off of his own product called{' '}
        </p>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>
  
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <List
          textAlign="justify"
  
          css={{
            backdropFilter: 'blur(10px)',
            marginTop: '1rem',
            backdropFilter: 'blur(10px)' 
          }}
        >
          <ListItem>
            <strong>2000:</strong> Born in Ulaanbaatar, Mongolia.
          </ListItem>
          <ListItem>
            <strong>2021:</strong> Completed the Bachelor&apos;s Program in the
            Graduate Mongolian University of Science and Technology.
          </ListItem>
          <ListItem>
            <strong>2019:</strong> Worked at Able Soft as an intern and developer.
          </ListItem>
          <ListItem>
            <strong>2021:</strong> Worked at Sod Mongol LLC.
          </ListItem>
          <ListItem>
            <strong>2023 to present:</strong> Working at Next Social Platform LLC.
          </ListItem>
        </List>
      </Section>
  
      <Section delay={0.3}>
        <Heading  variant="section-title">
          Social Network
        </Heading>
        <List           
          textAlign="center"
          css={{
            backdropFilter: 'blur(10px)',
            marginTop: '1rem',
            backdropFilter: 'blur(10px)' 
          }}
        >
          <ListItem>
            <Link href="https://github.com/kyuna312" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                css={{ backdropFilter: 'blur(10px)' }}
                leftIcon={<IoLogoGithub />}
              >
                @maririn312
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/m1or3n" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                css={{ backdropFilter: 'blur(10px)' }}
                leftIcon={<IoLogoTwitter />}
              >
                @m1or3n
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/m1or3n" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                css={{ backdropFilter: 'blur(10px)' }}
                leftIcon={<IoLogoInstagram />}
              >
                @m1or3n
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
  )
  
  export default Home
  export { getServerSideProps } from '../components/chakra'
