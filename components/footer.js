import React from 'react';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';

const Footer = () => {
  return (
    <Box
      py={10}
      mx={20}
      color="white"
      textAlign="center"
      className="footer"
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <Box mb={4}>
        <Box display="inline-block" borderRadius="full" overflow="hidden" mb={2}>
          <Image
            src="/images/maya.png"
            width={150}
            height={150}
            alt="Picture of the author"
          />
        </Box>
        <Box fontSize="md" fontStyle="italic">
          💞👠⚜️ 一歩、二歩…「未来」への道は足元にある。💞👠⚜️
        </Box>
      </Box>
      <Box fontSize="md" opacity={0.6}>
        Made with ❤️ by 霜花(Shimoka)
      </Box>
    </Box>
  );
};

export default Footer;
