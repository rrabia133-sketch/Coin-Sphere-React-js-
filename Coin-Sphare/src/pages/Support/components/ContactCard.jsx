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
    <Card p="6" borderRadius="1rem" bg="black" border="1px solid" borderColor="yellow">
      <Stack spacing={6}>
        <Text fontWeight="medium" fontSize="sm" color="yellow">
          You will receive response within 24 hours of time of submit.
        </Text>

        <HStack
          flexDir={{
            base: "column",
            md: "row",
          }}
        >
          <FormControl>
            <FormLabel color="yellow">Name</FormLabel>
            <Input placeholder="Enter Your Name.." bg="black" borderColor="yellow" color="yellow" _placeholder={{ color: "gray.400" }} />
          </FormControl>
          <FormControl>
            <FormLabel color="yellow">Surename</FormLabel>
            <Input placeholder="Enter Your Surename.." bg="black" borderColor="yellow" color="yellow" _placeholder={{ color: "gray.400" }} />
          </FormControl>
        </HStack>
        <FormControl>
          <FormLabel color="yellow">Email</FormLabel>
          <Input type="email" placeholder="Enter Your Email.." bg="black" borderColor="yellow" color="yellow" _placeholder={{ color: "gray.400" }} />
        </FormControl>
        <FormControl>
          <FormLabel color="yellow">Message</FormLabel>
          <Textarea placeholder="Enter Your Message.." bg="black" borderColor="yellow" color="yellow" _placeholder={{ color: "gray.400" }} />
        </FormControl>
        <Checkbox defaultChecked colorScheme="yellow">
          <Text fontSize="xs" color="yellow">
            I agree with
            <Box as="span" color="yellow">
              {" "}
              Terms & Conditions.
            </Box>
          </Text>
        </Checkbox>
        <Stack>
          <Button fontSize="sm" bg="yellow" color="black" _hover={{ bg: "yellow.600" }}>Send a Message</Button>
          <Button fontSize="sm" bg="gray.600" color="yellow" _hover={{ bg: "gray.700" }}>
            Book a Meeting
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ContactCard;
