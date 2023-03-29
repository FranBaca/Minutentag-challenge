import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
  } from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

export default function Navbar() {
  return (
    <div>
    <Box px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
      <HamburgerIcon />
        <Flex alignItems={"center"}>
          <Menu>
            <MenuButton
              as={Button}
              rounded={"full"}
              variant={"link"}
              cursor={"pointer"}
            >
              <Avatar
                size={"md"}
                src="/Sin título-1.jpg"
              />
            </MenuButton>
            <MenuList>
              <MenuItem>Link 1</MenuItem>
              <MenuItem>Link 2</MenuItem>
              <MenuDivider />
              <MenuItem>Link 3</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  </div>
  )
}
