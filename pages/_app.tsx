


import {ChakraProvider , extendTheme} from '@chakra-ui/react'

import type { AppProps } from 'next/app'


const theme = extendTheme ({
    
    fonts : {
        body: 'Space Mono, sans-serif'
   },
    
  colors: {
      strongCyan: 'hsl(172, 67%, 45%)',
      darkCyan: 'hsl(183, 100%, 15%)',
      darkGrey: 'hsl(186, 14%, 43%)' ,
      lightGrey: 'hsl(185, 41%, 84%)' ,
      veryLightGrey: 'hsl(189, 41%, 97%)',
      white: 'hsl(0, 0%, 100%)' ,
  }
    
})

function MyApp({ Component, pageProps }: AppProps) {
  return(

    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>

  )

  }

export default MyApp
