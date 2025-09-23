import { Button, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineInfoCircle,
  AiOutlineArrowDown,
  AiOutlineArrowUp,
} from "react-icons/ai";
const PortfolioSection = () => {
  return (
    <HStack
      justify="space-between"
      bg="black"
      border="1px solid"
      borderColor="yellow"
      borderRadius="xl"
      p="6"
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}
      spacing={{
        base: 4,
        xl: 0,
      }}
    >
      <HStack
        spacing={{
          base: 0,
          xl: 16,
        }}
        align={{
          base: "flex-start",
          xl: "center",
        }}
        flexDir={{
          base: "column",
          xl: "row",
        }}
      >
        <Stack>
          <HStack color="yellow">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle="h2" fontWeight="medium" color="yellow">
            ₹ 112,312.24
          </Text>
        </Stack>

        <Stack>
          <HStack color="yellow">
            <Text fontSize="sm">Wallet Balances</Text>
          </HStack>
          <HStack
            spacing={2}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium" color="yellow">
                22.39401000
              </Text>{" "}
              <Tag bg="yellow" color="black" fontWeight="medium">
                BTC
              </Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2" fontWeight="medium" color="yellow">
                ₹ 1,300.00
              </Text>{" "}
              <Tag bg="yellow" color="black">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button leftIcon={<Icon as={AiOutlineArrowDown} />} bg="yellow" color="black" _hover={{ bg: "yellow.600" }}>Deposit</Button>
        <Button leftIcon={<Icon as={AiOutlineArrowUp} />} bg="yellow" color="black" _hover={{ bg: "yellow.600" }}>Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
