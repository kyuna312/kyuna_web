import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('whiteAlpha.900', 'whiteAlpha.900')
  const activeColor = useColorModeValue('grassTeal', 'whiteAlpha.500')
  const activeBgColor = useColorModeValue('grassTeal', 'transparent')
  const inactiveBgColor = useColorModeValue('transparent', 'transparent')
  const activeStyle = active ? { filter: 'blur(0.05px)' } : {}

  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? activeBgColor : inactiveBgColor}
      color={active ? activeColor : inactiveColor}
      target={target}
      style={activeStyle}
      _hover={{ color: activeColor }} // Add this line to change text color on hover
      ml={2} // Add this line to move the Link text a little bit to the right
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="start"
        justify="space-between"
      >
        <Flex align="center">
          <Heading as="h1" size="md" letterSpacing={'tighter'} fontWeight="bold">
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/cv" path={path}>
            CV
          </LinkItem>
          <LinkItem
            target="_blank"
            href="https://github.com/kyuna312"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
          </LinkItem>
        </Stack>

        <Box flex={1} align='right' mr={{ base: 'auto', md: 'auto' , sm: 'auto' }}>
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  About
                </MenuItem>
                <MenuItem as={MenuLink} href="/works">
                  Works
                </MenuItem>
                <MenuItem as={MenuLink} href="/cv">
                  Cv
                </MenuItem>
                <MenuItem as={Link} href="https://github.com/kyuna312">
                  GitHub
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
