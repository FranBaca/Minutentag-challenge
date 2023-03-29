import { Box, Button, ButtonGroup, Flex, Stack, Text } from '@chakra-ui/react'
import Categories from './Categories'
import SearchBar from './SearchBar'

export default function Hero() {
  return (
    <>
      <Flex>
        <SearchBar />
      </Flex>
      <Categories/>
    </>
  )
}

