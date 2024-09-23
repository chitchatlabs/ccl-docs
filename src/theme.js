import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const fonts = {
  heading: `'Montserrat', sans-serif`,
  body: `'Lato', sans-serif`,
};

const colors = {
  primary: '#85144b',   // Primary color for CTA
  secondary: '#3d9970', // Secondary color
  'primary-light': '#a64d72',  // Lighter shade of primary color
  'primary-dark': '#5e0e34',   // Darker shade of primary color
  'secondary-dark': '#357a5b', // Darker shade of secondary color
  'secondary-light': '#6ebf8e', // Lighter shade of secondary color
  background: '#ffffff', // Background color for the website
  text: '#000000',       // Default text color
  placeholders: '#85144b', // Placeholder color set to primary color
};

const styles = {
  global: (props) => ({
    body: {
      fontFamily: 'body',
      color: mode('text', 'whiteAlpha.900')(props),
      bg: mode('background', 'gray.800')(props),
      lineHeight: 'base',
    },
    '*::placeholder': {
      color: mode('placeholders', 'whiteAlpha.600')(props),
    },
    h1: {
      fontFamily: 'heading',
      color: 'secondary-dark',
    },
    a: {
      color: 'primary',
      _hover: {
        textDecoration: 'underline',
      },
    },
  }),
};

const theme = extendTheme({ fonts, colors, styles });

export default theme;