import { Box, Flex, Icon, Stack } from '@chakra-ui/react'
import { AiFillHome } from "react-icons/ai"
import { HiOutlineShoppingBag } from "react-icons/hi"
import { FiSettings } from "react-icons/fi"
import { RiFileListLine } from "react-icons/ri"
import { useMediaQuery } from '@chakra-ui/media-query';

export default function Footer() {
  const [isLargerThan800] = useMediaQuery('(max-width: 800px)')
  return (
    <>
      {
        isLargerThan800 ?
          <Flex position="fixed" bottom="0" w="90%" justify="space-between" bg='white' height="60px" align="center">
            <Icon as={AiFillHome} color='#8F8F8F' _hover={{ color: "#FF9F24" }} w={8} h={8} />
            <Icon as={RiFileListLine} color='#8F8F8F' _hover={{ color: "#FF9F24" }} w={8} h={8} />
            <Icon as={HiOutlineShoppingBag} color='#8F8F8F' _hover={{ color: "#FF9F24" }} w={8} h={8} />
            <Icon as={FiSettings} color='#8F8F8F' _hover={{ color: "#FF9F24" }} w={8} h={8} />
          </Flex>
          :
          null
      }
    </>

  )
}
