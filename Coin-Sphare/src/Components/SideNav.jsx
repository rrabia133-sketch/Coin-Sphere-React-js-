import {
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
  Box,
} from "@chakra-ui/react";
import { RiDashboardHorizontalFill } from "react-icons/ri";
import { LuArrowDownUp } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
export default function SideNav() {
  const navlinks = [
    {
      icon: RiDashboardHorizontalFill,
      text: "Dashboard",
      Link: "/",
    },
    {
      icon: LuArrowDownUp,
      text: "Transaction",
      Link: "/Transaction",
    },
  ];
  return (
    <>
      <Stack boxShadow="sm" maxW="16rem" h="100vh" bg="gray">
        <Heading
          textAlign="center"
          marginTop="30px"
          fontSize="20px"
          as="h1"
          pt="3"
        >
          Coin Sphare
        </Heading>
        <Box mt="6" mx="3">
          {navlinks.map((nav, index) => (
            <HStack
              borderRadius="10px"
              mx="3"
              key={index}
              py="3"
              px="4"
              _hover={{
                bg: "#f3f3f7",
              }}
            >
              <Icon as={nav.icon}></Icon>
              <Text>{nav.text}</Text>
            </HStack>
          ))}
        </Box>

        <Box mt="6" mx="3">
          <HStack
            borderRadius="10px"
            mx="3"
            py="3"
            px="4"
            _hover={{
              bg: "#f3f3f7",
            }}
          >
            <Icon as={BiSupport}></Icon>
            <Text> Support</Text>
          </HStack>
        </Box>
      </Stack>
    </>
  );
}
