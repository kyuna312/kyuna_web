import { Container, Text, HStack, Box, Heading, Link } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Layout from '../components/layouts/page'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../next-i18next.config'
import { motion } from 'framer-motion'
import { IoLogoGithub, IoArrowForward } from 'react-icons/io5'
import { site } from '../lib/site'
import {
  defaultProjects,
  projectGroups,
  groupOf
} from '../lib/project-defaults'
import { sql, ensureSchema } from '../lib/db'
import { Eyebrow, CrystalDivider, CrystalMark } from '../components/frost'

const MotionBox = motion.create(Box)

// One kanji per section: 環 environment · 実 experiment · 品 product.
const groupKanji = { tooling: '環', experiment: '実', products: '品' }

const ProjectRow = ({
  title,
  description,
  thumbnail,
  url,
  github,
  tech,
  featured,
  t
}) => (
  <Box
    as="article"
    display="grid"
    gridTemplateColumns={{ base: '1fr', md: thumbnail ? '1fr 300px' : '1fr' }}
    columnGap={10}
    rowGap={5}
    py={{ base: 8, md: 10 }}
    borderTop="1px solid"
    borderColor="hairline"
    role="group"
  >
    <Box maxW="56ch">
      <Heading
        as="h3"
        fontSize="2xl"
        mb={3}
        display="flex"
        alignItems="center"
        gap={3}
      >
        {title}
        {featured && (
          <Box
            as="span"
            color="bloom"
            display="inline-flex"
            title={t('projects.featured')}
          >
            <CrystalMark size={12} />
          </Box>
        )}
      </Heading>
      <Text fontSize="sm" mb={4}>
        {description}
      </Text>
      <Text
        fontFamily="mono"
        fontSize="xs"
        color="ice"
        letterSpacing="0.08em"
        mb={5}
      >
        {tech}
      </Text>
      <HStack spacing={5}>
        {url && (
          <Link
            href={url}
            target="_blank"
            fontFamily="mono"
            fontSize="sm"
            display="inline-flex"
            alignItems="center"
            gap={2}
            _hover={{ color: 'bloom' }}
          >
            {t('projects.visit')} <IoArrowForward size={13} />
          </Link>
        )}
        {github && (
          <Link
            href={github}
            target="_blank"
            fontFamily="mono"
            fontSize="sm"
            display="inline-flex"
            alignItems="center"
            gap={2}
            _hover={{ color: 'bloom' }}
          >
            <IoLogoGithub size={14} /> {t('projects.source')}
          </Link>
        )}
      </HStack>
    </Box>
    {thumbnail && (
      <Box
        as={url ? 'a' : 'div'}
        href={url || undefined}
        target={url ? '_blank' : undefined}
        aria-hidden={url ? undefined : 'true'}
        tabIndex={url ? -1 : undefined}
        position="relative"
        aspectRatio="16 / 10"
        alignSelf="start"
        border="1px solid"
        borderColor="hairline"
        borderRadius="2px"
        overflow="hidden"
        bg="pane"
        transition="border-color 0.25s ease, box-shadow 0.25s ease"
        _groupHover={{
          borderColor: 'ice',
          boxShadow:
            '0 0 0 1px var(--chakra-colors-ice), 0 0 24px var(--chakra-colors-iceDim)'
        }}
        // Scanlines over the thumbnail — the one cyberpunk note on the page.
        _after={{
          content: '""',
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(0,0,0,0.12) 0 1px, transparent 1px 3px)',
          mixBlendMode: 'multiply',
          opacity: 0.6
        }}
      >
        <Image
          src={thumbnail}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
      </Box>
    )}
  </Box>
)

const Projects = ({ rows }) => {
  const { t } = useTranslation('common')
  const { locale } = useRouter()

  const projects = rows.map(p => ({
    ...p,
    description: p.descriptions?.[locale] || p.descriptions?.en || ''
  }))

  return (
    <Layout
      title={t('projects.title')}
      description={t('projects.seo.description')}
    >
      <Container
        maxW="container.lg"
        px={{ base: 4, md: 6 }}
        pt={{ base: 6, md: 14 }}
        pb={10}
      >
        <MotionBox
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          mb={12}
        >
          <Eyebrow kanji="作" color="ice">
            {t('projects.selectedWork')}
          </Eyebrow>
          <Heading as="h1" fontSize={{ base: '4xl', md: '5xl' }} mb={4}>
            {t('projects.title')}
          </Heading>
          <Text maxW="56ch">{t('projects.description')}</Text>
        </MotionBox>

        {projectGroups.map(group => {
          const items = projects.filter(p => groupOf(p.key) === group)
          if (!items.length) return null
          return (
            <Box key={group} as="section" mb={{ base: 14, md: 20 }}>
              <Eyebrow
                kanji={groupKanji[group]}
                color={group === 'products' ? 'bloom' : 'ice'}
              >
                {t(`projects.groups.${group}`)}
              </Eyebrow>
              <Box borderBottom="1px solid" borderColor="hairline">
                {items.map(project => (
                  <ProjectRow key={project.key} {...project} t={t} />
                ))}
              </Box>
            </Box>
          )
        })}

        <CrystalDivider my={{ base: 16, md: 20 }} />

        {/* Off the keyboard */}
        <Box>
          <Eyebrow kanji="芸" color="gold">
            {t('projects.offKeyboard.label')}
          </Eyebrow>
          <Heading
            as="h2"
            fontSize={{ base: '2xl', md: '3xl' }}
            mb={4}
            maxW="24ch"
          >
            {t('projects.offKeyboard.heading')}
          </Heading>
          <Text maxW="52ch" mb={6}>
            {t('projects.offKeyboard.body')}
          </Text>
          <Link
            href={site.instagram}
            target="_blank"
            fontFamily="mono"
            fontSize="sm"
            color="ice"
            borderBottom="1px solid"
            borderColor="hairline"
            pb="2px"
            _hover={{ color: 'bloom', borderColor: 'bloom' }}
          >
            instagram.com/{site.handle}
          </Link>
        </Box>
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ locale }) {
  // Projects live in the database (edited from /admin); the lineup file is
  // the fallback when the table is empty or no database is configured.
  let rows = null
  try {
    await ensureSchema()
    const result = await sql`SELECT * FROM projects ORDER BY sort`
    if (result.rows.length) {
      rows = result.rows.map(
        ({
          key,
          title,
          descriptions,
          tech,
          url,
          github,
          thumbnail,
          featured
        }) => ({
          key,
          title,
          descriptions,
          tech,
          url,
          github,
          thumbnail,
          featured
        })
      )
    }
  } catch {
    // fall through to defaults
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'], nextI18NextConfig)),
      rows: rows || defaultProjects()
    },
    revalidate: 60
  }
}

export default Projects
