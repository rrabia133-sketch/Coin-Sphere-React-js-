import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import { IoMdMail } from "react-icons/io";
const SupportCard = ({ leftComponent, icon, title, text }) => {
  return (
    <Flex
      gap={6}
      justify="space-between"
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxW="24rem">
        <Icon as={icon} boxSize={6} color="blue.500" />
        <Text fontWeight="medium" as="h1" textStyle="h1" color="gray.600">
          {title}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {text}
        </Text>
      </Stack>
      <Box maxW="550px" w="full">
        {leftComponent}
      </Box>
    </Flex>
  );
};

export default SupportCard;
