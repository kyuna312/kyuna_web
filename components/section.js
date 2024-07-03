import { motion } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/react';

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => shouldForwardProp(prop) || prop === 'transition'
});

const Section = ({ children, delay = 0 }) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    mb={6}
    flexDirection={{ base: 'row', md: 'row' }}
    position="relative"
    overflow="hidden"
  >
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8, delay }}
      position="absolute"
      top={0}
      left={0}
      width="100%"
      height="100%"
    >
      {children}
    </motion.div>
  </StyledDiv>
);

export default Section;
