
import React, { useEffect, useState } from "react";


import {NumberInput , NumberInputStepper , VStack  , Text, InputGroup, Input  ,InputLeftElement , Icon , Image, NumberInputField, NumberIncrementStepper, NumberDecrementStepper, FormControl, Grid, Button} from '@chakra-ui/react'


const InputArea : React.FC = () => {
  
  const [isZero, setIsZero] = useState<number>(0)
   
  
  const tip:number[] = [5 , 10 , 15 , 25 ,50]


          
 const yesIsZero = isZero === 0 
          
    

  return (
     <VStack
          p={4}
          w={{base:'full' , md:'22rem'}}
          alignItems='start'
          >
        <Text as='h3' fontSize={{base:'sm' , md:'md'}} fontWeight='bold' color='darkGrey' >Bill</Text>
        <InputGroup
               
                  >
          <InputLeftElement 
                    fontWeight='bold'
                    color='lightGrey'
                    fontSize='1.5rem'
                    >  
                      <Image src='./dollar.svg' alt='dollar' />
        </InputLeftElement>

                    
        <NumberInput
              w='full'
             min={0}>
          <NumberInputField 
                    _focus={{
              borderWidth:'.15rem',
              borderColor:'grey',
              shadow: 'md'
            }}
                textAlign='right' fontWeight='bold' color='darkCyan' bg='veryLightGrey' placeholder='0' />
      
        <NumberInputStepper>
          <NumberIncrementStepper /> 
          <NumberDecrementStepper />  
        </NumberInputStepper>       


        </NumberInput>
                    
        </InputGroup>



        <VStack
              w='full'
              alignItems='start'
              >
          <Text  as='h3' fontSize={{base:'sm' , md:'md'}} fontWeight='bold' color='darkGrey' >Select Tip %</Text>
          <Grid
              
              gap={{base:'4' , lg:'8'}}
              templateColumns={{base:'repeat(2,1fr)' , lg:'repeat(3,1fr)'}}
              >
                
          {tip.map(item => (
              <Button
                  _focus={{
                bg:'lightGrey',
                color:'darkCyan'

              }}
                  fontSize={{base:'sm' , md:'md'}}
                  w='1/2' 
                  py={2}
                  color='white'
                  bg='darkCyan'
                  key={'any'}
                  px={{base:'4' , md:'8'}}    
                        >{item}%</Button>
          ))}
    
          
            <NumberInput  w='1/2' >
              <NumberInputField 
                  fontWeight='bold' color='darkCyan' bg='veryLightGrey' 
                 fontSize='0.8rem' 
                  textAlign='right' placeholder="CUSTOM"  />
          </NumberInput> 

          </Grid>
      </VStack>



  <Text as='h3' fontSize={{base:'sm' , md:'md'}}    fontWeight='bold' color='darkGrey' >Number of People</Text>

        <InputGroup
               
                  >
          <InputLeftElement 
                    fontWeight='bold'
                    color='lightGrey'
                    fontSize='1.5rem'
                  >
            <Image src='./person.svg' alt='person' />
        </InputLeftElement>
  
      <FormControl 
            isInvalid={yesIsZero}    
          >        
          <NumberInput  min={0}>
          <NumberInputField
                           
              value={isZero} 
              _focus={{
              borderWidth:'.15rem',
              borderColor:'grey',
              shadow: 'md'
            }}  
              textAlign='right' fontWeight='bold' color='darkCyan' bg='veryLightGrey' placeholder='0' />
        <NumberInputStepper>
          <NumberIncrementStepper /> 
          <NumberDecrementStepper />  
        </NumberInputStepper>       
        </NumberInput>
 </FormControl>

                 
                    
        </InputGroup>



    </VStack> 
  )


}

export default InputArea



