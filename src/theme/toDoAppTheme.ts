const theme = {
  space: [
    0,
    4,
    8,
    25,
    32,
    64,
  ],
  fonts: {
    body: '"Lato", sans-serif',
    heading: '"Poppins", sans-serif',
    monospace: '"Poppins", serif'
  },
  fontSizes: [
    12,
    14,
    18,
    20,
    24,
    45,
    48,
    64,
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    text: '#ffffff',
    background: '#4abdac',
    primary: '#fc4a1a',
    secondary: '#f7b733',
    muted: '#dfdce3'
  },
  buttons: {
    action: {
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white',
      bg: 'primary',
      transition: '.5s linear',
      '&:hover': {
        boxShadow: '1px 1px 5px 0px black'
      },
    },
  },
  text: {
     nav: { color: 'text', textDecoration: 'none',
     fontSize: [2, 3]}
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: [5,6,7],
      textAlign: 'center',
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
      textAlign: 'center',
      margin: '1em'
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
      textAlign: 'center'
    },
    p: {
      color: 'primary',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
  }
}

export default theme;