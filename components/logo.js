import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import DarkGirlIcon from './icons/darkgirl_icon'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  gap: 10px;
  padding: 20px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <DarkGirlIcon />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
        >
          Amane Marin
        </Text>
      </LogoBox>
    </Link>
  );
}

export default Logo
