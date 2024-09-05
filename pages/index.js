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
          職務経歴
        </Heading>
        <Box marginLeft={4} marginTop={4}>
          <p>
            ハタンゾリグは、ウランバートルを拠点とするフルスタック開発者であり、プロダクトの企画、デザイン、コーディングを通じた問題解決に情熱を持っています。5年間にわたるモバイルおよびウェブ開発の経験を持ち、大学3年生の頃から培ってきた技術を活かし、多様なプロジェクトで専門的な知識を提供してきました。リバースエンジニアリングやエクスプロイト開発にも強い関心を抱いており、自作のオペレーティングシステムの構築にも挑戦しています。
            オフラインでは、アニメやマンガ、ライトノベルを楽しみ、時にはコスプレも趣味としています。現在は、Odoo ERPの業務プロジェクトに携わりながら、シンプルなカーネルOSの開発などの個人プロジェクトにも取り組んでいます。
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
            担当したプロジェクト
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          経歴
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
            <strong>2000年:</strong> モンゴル国ウランバートルに生まれました。
          </ListItem>
          <ListItem css={{ marginBottom: '0.5rem' }}>
            <strong>2019年:</strong> Able Softでインターンシップを行い、開発者として勤務しました。
          </ListItem>
          <ListItem css={{ marginBottom: '0.5rem' }}>
            <strong>2021年:</strong> モンゴル国立科学技術大学の学士課程を修了し、Sod Mongol LLCで勤務を開始しました。
          </ListItem>
          <ListItem css={{ marginBottom: '0.5rem' }}>
            <strong>2023年1月:</strong> Sod Mongol LLCでの勤務を終了しました。
          </ListItem>
          <ListItem css={{ marginBottom: '0.5rem' }}>
            <strong>2023年2月から現在:</strong> Next Social Platform LLCで勤務しています。
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
            履歴書
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)
  
  export default Home
  export { getServerSideProps } from '../components/chakra'
