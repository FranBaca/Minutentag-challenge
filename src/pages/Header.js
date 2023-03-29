import {  Flex, Text } from '@chakra-ui/react'
export default function Header() {
  return (
    <Flex direction="column" justify="start" marginBottom="15px">
        <Text fontSize="sm" color="#646464">Hi Mr.Michael,</Text>
        <Text fontSize="4xl" fontWeight="700">Welcome back!</Text>
      </Flex>
  )
}
