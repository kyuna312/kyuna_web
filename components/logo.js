import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import Image from 'next/image';
import DarkGirlIcon from './icons/darkgirl_icon';

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  gap: 10px;
  padding: 20px;
  border-radius: 50px;
  background-color: pink.200;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: pink.300;
  }

  > svg {
    transition: transform 0.3s ease;
  }

  &:hover > svg {
    transform: rotate(20deg) scale(1.2);
  }
`;

const Logo = React.memo(() => {
  return (
    <Link href="/">
      <LogoBox>
        <DarkGirlIcon />
        <Image src="/images/真夜_.png" width={50} height={200} alt="Picture of the author" />
      </LogoBox>
    </Link>
  );
});

export default Logo;
