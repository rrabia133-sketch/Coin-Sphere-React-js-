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
      bg="white"
      boxShadow="md"
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
          <HStack color="gray.500">
            <Text fontSize="sm">Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <Text textStyle="h2" fontWeight="medium" color="gray.600">
            ₹ 112,312.24
          </Text>
        </Stack>

        <Stack>
          <HStack color="gray.500">
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
              <Text textStyle="h2" fontWeight="medium" color="gray.600">
                22.39401000
              </Text>{" "}
              <Tag bg="blue.500" color="white" fontWeight="medium">
                BTC
              </Tag>
            </HStack>
            <HStack>
              <Text textStyle="h2" fontWeight="medium" color="gray.600">
                ₹ 1,300.00
              </Text>{" "}
              <Tag bg="blue.500" color="white">INR</Tag>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button leftIcon={<Icon as={AiOutlineArrowDown} />} colorScheme="blue">Deposit</Button>
        <Button leftIcon={<Icon as={AiOutlineArrowUp} />} colorScheme="blue">Withdraw</Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
