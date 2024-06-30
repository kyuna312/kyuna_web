import React from 'react';
import { Text, Flex, Box } from '@chakra-ui/react';
import Image from 'next/image';

const Footer = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      py={10}
      mx={20}
      color="white"
      className="footer"
    >
      <Flex
        direction={['column', 'column', 'row']}
        align="center"
        justify="center"
        mb={2}
      >
        <Box w={[null, null, 400]} mr={[null, null, 10]}>
          <Text fontSize="sm" fontStyle="bold">
            💞👠⚜️ あら 雷が怖いのですか? この世で唯一無二の高貴なる者であり、最も恐ろしい雷霆の化身が、あなたのそばにいるというのに。 💞👠⚜️
          </Text>
        </Box>
        <Box
          borderStyle="solid"
          w={['100px', '100px', '200px']}
          h={['100px', '100px', '200px']}
          display="inline-block"
          borderRadius="full"
          overflow="hidden"
          mt={[2, 2, 0]}
        >
          <Image
            src="/images/maya.png"
            width={200}
            height={200}
            alt="Picture of the author"
          />
        </Box>
      </Flex>
      <Box fontSize="sm" opacity={0.6} mt={2}>
        Made with ❤️ by Kyuna
      </Box>
    </Flex>
  );
};

export default Footer;
