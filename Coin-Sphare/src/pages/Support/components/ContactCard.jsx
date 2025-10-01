import {
  Card,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Box,
  Stack,
  Text,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React from "react";

const ContactCard = () => {
  return (
    <Card p="6" borderRadius="1rem" bg="white" boxShadow="md">
      <Stack spacing={6}>
        <Text fontWeight="medium" fontSize="sm" color="gray.600">
          You will receive response within 24 hours of time of submit.
        </Text>

        <HStack
          flexDir={{
            base: "column",
            md: "row",
          }}
        >
          <FormControl>
            <FormLabel color="gray.600">Name</FormLabel>
            <Input placeholder="Enter Your Name.." />
          </FormControl>
          <FormControl>
            <FormLabel color="gray.600">Surename</FormLabel>
            <Input placeholder="Enter Your Surename.." />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel color="gray.600">Email</FormLabel>
          <Input type="email" placeholder="Enter Your Email.." />
        </FormControl>
        <FormControl>
          <FormLabel color="gray.600">Message</FormLabel>
          <Textarea placeholder="Enter Your Message.." />
        </FormControl>
        <Checkbox defaultChecked colorScheme="blue">
          <Text fontSize="xs" color="gray.600">
            I agree with
            <Box as="span" color="blue.500">
              {" "}
              Terms & Conditions.
            </Box>
          </Text>
        </Checkbox>
        <Stack>
          <Button fontSize="sm" colorScheme="blue">Send a Message</Button>
          <Button fontSize="sm" variant="outline" colorScheme="blue">
            Book a Meeting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
