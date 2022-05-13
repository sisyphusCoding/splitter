

import React from "react";

import{VStack , Text , Button, HStack} from '@chakra-ui/react'


const OutputArea: React.FC = () => {

  return(
  
      

    <VStack
          
          w={{base:'full' , md:'22rem'}}
          justifyContent='space-between'
          color='strongCyan'
          bg='darkCyan'
          borderRadius={8} 
          shadow='xl'
          p={8}
          alignItems='center'
          >
  
      <VStack
          w='full'
          >
        
      <HStack 
            w='full' 
            justifyContent='space-between'
          >
        <VStack
            
            alignItems='start'
            >
          <Text
             
              fontSize={{base:'.8rem' , md:'1rem'}} 
              textAlign='left'
              color='white'
              fontWeight='bold'
              as='h5' >
            Tip Amount
          </Text>
           <Text
       
        
              fontWeight='bold' 
              fontSize={{base:'.65rem' , md:'.8rem'}} 
              textAlign='left'
              >
                / person
          </Text>
        </VStack>

            <Text 
                
         
          
                fontSize={{base:'1.5rem' , md:'2rem'}} 
                fontWeight='bold'      
          >
             $ 0.00 
            </Text>
      </HStack>

      <HStack
            
           w='full' 
            justifyContent='space-between'
          >
        <VStack 
            alignItems='start'
            >
          <Text
              
              fontSize={{base:'.8rem' , md:'1rem'}}  
              color='white'
              fontWeight='bold'
              as='h5'>
            Total
          </Text>
           <Text  
              
              fontWeight='bold' 
              fontSize={{base:'.65rem' , md:'.8rem'}} 
              >
                / person
          </Text>
        </VStack>

            <Text
                
                fontSize={{base:'1.5rem' , md:'2rem'}} 
               
                fontWeight='bold'      
          >
             $ 0.00 
            </Text>
      </HStack>
      </VStack>
          <Button
           _focus={{
                bg:'lightGrey',
                color:'darkCyan'

              }}
            color='darkCyan'
            w='full' bg='strongCyan'>
            RESET
      </Button>
    </VStack>


)


}


export default OutputArea
