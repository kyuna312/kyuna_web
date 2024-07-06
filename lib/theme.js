import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  styles: {
    global: (_props) => ({
      body: {
        bg: 'linear-gradient(135deg, #000000, #fe80a0)',
      },
    }),
  },
  components: {
    Link: {
      baseStyle: (_) => ({
        color: '#3d7aed',
        textUnderlineOffset: 3,
      }),
    },
  },
  fonts: {
    heading: "'M PLUS Rounded 1c', sans-serif",
    body: 'Hack, Hack Mono',
  },
  textStyles: {
    customTextStyle: {
      fontWeight: 'bold',
      fontStyle: 'italic',
      textShadow: '1px 2px 2px rgba(0, 0, 0, 0.5)',
    },
  },
});

export default theme;
