import {Button, Flex, Stack, Text } from '@chakra-ui/react'
import Image from 'next/image'
export default function Categories() {
  return (
    <>
    <Flex justify="space-between" padding={2}>
    <Text fontSize="xl" fontWeight="700" marginTop={5}>Drink Category</Text>
    <Text fontSize="sm" marginTop={5} color="#646464">See all</Text>
  </Flex>
   <Stack spacing={4} direction='row' align='center' marginTop="20px">
   <Button colorScheme='gray' _hover={{ bg: "#FF9F24", color: "#fff" }} size='md'>
     All
   </Button>
   <Button colorScheme='gray' _hover={{ bg: "#FF9F24", color: "#fff" }} size='md'>
     <Image
       src="/Beer.png"
       width="25"
       height="25"
       alt="beer"
     />
     Beer
   </Button>
   <Button colorScheme='gray' _hover={{ bg: "#FF9F24", color: "#fff" }} size='md'>
     <Image
       src="/Wine-glass.png"
       width="25"
       height="25"
       alt="wine"
     />
     Wine
   </Button>
 </Stack>
 <Text fontSize="lg" fontWeight="700" marginTop={5}>Populer</Text>
 </>
  )
}
