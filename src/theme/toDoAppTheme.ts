const theme = {
  space: [
    0,
    4,
    8,
    25,
    32,
    64,
    128,
    256,
    512
  ],
  fonts: {
    body: '"Roboto Condensed", sans-serif',
    heading: '"Roboto Condensed", sans-serif',
    monospace: '"Roboto Slab", serif'
  },
  fontSizes: [
    12,
    14,
    16,
    20,
    24,
    45,
    48,
    64,
    96
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
     fontSize: [0, 3]}
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
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    },
    a: {
      color: 'primary'
    },
    img: {
      maxWidth: '100%'
    },
  }
}

export default theme;