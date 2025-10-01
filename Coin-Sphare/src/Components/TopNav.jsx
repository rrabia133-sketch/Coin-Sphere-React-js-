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
    <Box px="4" bg="white" boxShadow="sm">
      <HStack maxW="70rem" h="16" justify="space-between" mx="auto">
        <Icon
          as={FaBars}
          onClick={onOpen}
          color="blue.500"
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading fontWeight="medium" fontSize="28px" color="gray.600">
          {title}
        </Heading>

        <Menu>
          <MenuButton>
            <Icon as={FaUserTie} fontSize="24px" color="blue.500" />
          </MenuButton>
          <MenuList>
            <MenuItem _hover={{ bg: "blue.50" }}>Logout</MenuItem>
            <MenuItem _hover={{ bg: "blue.50" }}>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
