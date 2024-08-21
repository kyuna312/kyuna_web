import { forwardRef } from 'react';
import Logo from './logo';
import NextLink from 'next/link';
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
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { IoLogoGithub } from 'react-icons/io5';

const LinkItem = ({ href, path, target, children, ...props }) => {
	const active = path === href;
	const inactiveColor = useColorModeValue('whiteAlpha.900', 'whiteAlpha.900');
	const activeColor = useColorModeValue('grassTeal', 'whiteAlpha.500');
	const activeBgColor = useColorModeValue('grassTeal', 'transparent');
	const inactiveBgColor = useColorModeValue('transparent', 'transparent');
	const activeStyle = active ? { filter: 'blur(0.05px)' } : {};

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
			_hover={{ color: activeColor }}
			ml={2}
			{...props}
		>
			{children}
		</Link>
	);
};

const MenuLink = forwardRef((props, ref) => <Link ref={ref} as={NextLink} {...props} />);

const Navbar = (props) => {
	const { path } = props;

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container display="flex" maxW="container.md">
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
          <LinkItem href="/projects" path={path}>
            プロジェクト
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

        <Box
          flex={1}
          align="right"
          background={'transparent'}
          style={{ background: 'transparent', border: 'none' }}
          backdropBlur={10}
          mr={{ base: 'auto', md: 'auto', sm: 'auto' }}
        >
          <Box ml={2} mt={1} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy colorScheme="pink" width="50">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList
                minWidth="80px"
                style={{
                  backdropFilter: 'blur(30px)',
                  width: 50,
                  border: 'none',
                  background: 'transparent',
                  WebkitBackdropFilter: 'blur(10px)',
                  marginBottom: '1.45rem',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
                }}
              >
                <MenuItem backdropBlur={10} background={'transparent'} as={MenuLink} href="/">
                  概要
                </MenuItem>
                <MenuItem backdropBlur={10} background={'transparent'} as={MenuLink} href="/projects">
                  プロジェクト
                </MenuItem>
                <MenuItem
                  backdropBlur={10}
                  background={'transparent'}
                  as={Link}
                  href="https://github.com/kyuna312"
                >
                  GitHub
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
