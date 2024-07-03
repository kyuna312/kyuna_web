import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: mode('#f0e7db', '#202023')(props),
      },
    }),
  },
  components: {
    Heading: {
      variants: {
        'section-title': {
          textDecoration: 'underline',
          fontSize: 20,
          textUnderlineOffset: 6,
          textDecorationColor: '#525252',
          textDecorationThickness: 4,
          marginTop: 3,
          marginBottom: 4,
        },
      },
    },
    Link: {
      baseStyle: (props) => ({
        color: mode('#3d7aed', '#ff63c3')(props),
        textUnderlineOffset: 3,
      }),
    },
  },
  fonts: {
    heading: "'M PLUS Rounded 1c'",
  },
  colors: {
    grassTeal: '#88ccca',
  },
});

export default theme;
