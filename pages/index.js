import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Image from 'next/image';
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'

const Home = () => (
  <Layout>
    <Container paddingTop={20}>
      <Box display={{ md: 'flex' }} marginBottom={10}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            <Box>
              <Image src="/images/霜花.png" width={70} height={70} alt="Picture of the author" />
            </Box>
          </Heading>
          <p>Kernel Enjoyer Geek (Developer / Designer / Anime Fan)</p>
        </Box>
        <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} textAlign="center">
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
            backdropFilter="blur(20px)"
            background="rgba(255, 255, 255, 0.5)"
          >
            <Image
              src="/images/amane.jpg"
              alt="Profile image"
              width={100}
              height={100}
              layout="responsive"
              objectFit="object-cover"
              className="cloud-shape"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work Experience
        </Heading>
        <Box marginLeft={4}>
          <p>
            Kyuna is a full-stack developer based in Ulaanbaatar with a passion for building digital services. They excel at launching products, from planning and designing to solving real-life problems with code. With 5 years of experience in mobile and web development, starting from their third year at university, Maaya brings a wealth of expertise to their projects. In addition to development, they have an admiration for reverse engineering and exploit development, and they are interested in building their own operating system. When not online, Maaya loves watching and reading anime, manga, and light novels, and occasionally doing cosplay. Currently, they are living off of their own product.{' '}
          </p>
        </Box>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/projects"
            scroll={false}
            rightIcon={<ChevronRightIcon color={'white'} />}
            colorScheme="transparent"
            transition="all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
            _hover={{ transform: 'scale(1.05)' }}
            style={{ backdropFilter: 'blur(5px)', background: 'rgba(0, 0, 0, 0.5)',  color: 'white' , boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'}}
          >
            Worked Projects
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Biography
        </Heading>
        <List
          textAlign="justify"
          css={{
            backdropFilter: 'blur(20px)',
            padding: '1rem',
            borderRadius: '10px',
          }}
        >
          <ListItem css={{ marginBottom: '0.5rem' }}>
            <strong>2000:</strong> Born in Ulaanbaatar, Mongolia.
          </ListItem>
          <ListItem css={{ marginBottom: '0.5rem' }}>
            <strong>2021:</strong> Completed the Bachelor&apos;s Program in the Graduate Mongolian University of Science and Technology.
          </ListItem>
          <ListItem css={{ marginBottom: '0.5rem' }}>
            <strong>2019:</strong> Worked at Able Soft as an intern and developer.
          </ListItem>
          <ListItem css={{ marginBottom: '0.5rem' }}>
            <strong>2021:</strong> Worked at Sod Mongol LLC.
          </ListItem>
          <ListItem css={{ marginBottom: '0.5rem' }}>
            <strong>2023 to present:</strong> Working at Next Social Platform LLC.
          </ListItem>
        </List>
      </Section>

      <Section delay={0.3}>
        <Heading variant="section-title">Social Network</Heading>
        <List
          display="flex"
          textAlign="justify"
          css={{
            backdropFilter: 'blur(10px)',
            marginTop: '1rem',
            backdropFilter: 'blur(10px)', 
            justifyContent: 'center',
          }}
        >
          <ListItem>
            <Link href="https://github.com/kyuna312" target="_blank">
              <Button
                css={{ backdropFilter: 'blur(20px)', marginRight: '1rem'}}
                transition="all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
                _hover={{ transform: 'scale(1.05)' }}
                colorScheme="violet"
                variant="ghost"
                height={50}
              >
                <IoLogoGithub height={50} color='white' />
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/m1or3n" target="_blank">
              <Button
                css={{ backdropFilter: 'blur(20px)', marginRight: '1rem'}}
                transition="all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
                _hover={{ transform: 'scale(1.05)' }}
                colorScheme="violet"
                variant="ghost"
                height={50}
              ><IoLogoTwitter height={50} color='white' /></Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/m1or3n" target="_blank">
              <Button
                css={{ backdropFilter: 'blur(20px)' }}
                transition="all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
                _hover={{ transform: 'scale(1.05)' }}
                colorScheme="violet"
                variant="ghost"
                height={50}
              ><IoLogoInstagram height={50} color='white'  /></Button>
            </Link>
          </ListItem>
        </List>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="https://drive.google.com/file/d/1oWOw_YBpAOkuspCKvnnyOlLTcXwI-dmG/view?usp=sharing"
            scroll={false}
            colorScheme="transparent"
            transition="all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)"
            _hover={{ transform: 'scale(1.05)' }}
            style={{ backdropFilter: 'blur(5px)', background: 'rgba(0, 0, 0, 0.5)',  color: 'white' , boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'}}
          >
            RESUME
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)
  
  export default Home
  export { getServerSideProps } from '../components/chakra'
