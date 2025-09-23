import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FaBars, FaUserTie } from "react-icons/fa";
const TopNav = ({ title, onOpen }) => {
  return (
    <Box px="4" bg="black">
      <HStack maxW="70rem" h="16" justify="space-between" mx="auto">
        <Icon
          as={FaBars}
          onClick={onOpen}
          color="yellow"
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading fontWeight="medium" fontSize="28px" color="yellow">
          {title}
        </Heading>

        <Menu>
          <MenuButton>
            <Icon as={FaUserTie} fontSize="24px" color="yellow" />
          </MenuButton>
          <MenuList bg="black" borderColor="yellow">
            <MenuItem bg="black" color="yellow" _hover={{ bg: "yellow", color: "black" }}>Logout</MenuItem>
            <MenuItem bg="black" color="yellow" _hover={{ bg: "yellow", color: "black" }}>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
