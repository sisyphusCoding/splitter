import type { NextPage } from 'next'
import Head from 'next/head'



import {Box, Flex , Image} from '@chakra-ui/react'
import InputArea from '../components/input'
import OutputArea from '../components/output'


const Home: NextPage = () => {
  return (
        <Flex
            flexDir='column'
            alignItems='center'
            overflow='auto'
            justifyContent='center' 
            gap={{base:'4' , lg:'20'}}
            bg='lightGrey'
            minW='100vw'
            minH='100vh'
            >
 
          <Image 
              mt={2}
              boxSize={{base:'10vw' , md:'12vh'}}
              objectFit='contain'
              src='./logo.svg' alt='logo'  />

        <Flex
            alignItems='stretch'
            justifyContent='center'
            bg='white'
            gap={{base:'4' , lg:'10'}}
            shadow='2xl'
            borderRadius={8}
            px={4}
            py={{base:'2' , md:'4'}}
            flexDir={{base:'column' , md:'row'}}
            >
    
          <InputArea / >
          <OutputArea / >

        </Flex>



        </Flex> 
  ) 
}

export default Home
