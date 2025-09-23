import {
  Container,
  Flex,
  Heading,
  Menu,
  Button,
  Portal,
  Icon,
} from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";

export default function TopNav() {
  return (
    <Flex boxShadow="xl" h="100px">
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Heading>DashBoard</Heading>

        <Menu.Root positioning={{ placement: "right-start" }}>
          <Menu.Trigger asChild>
            <Button variant="plain" size="xl">
              <Icon as={FaUserCircle} fontSize="24px" />
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                <Menu.Item value="new-txt">New Text File</Menu.Item>
                <Menu.Item value="new-file">New File...</Menu.Item>
                <Menu.Item value="new-win">New Window</Menu.Item>
                <Menu.Item value="open-file">Open File...</Menu.Item>
                <Menu.Item value="export">Export</Menu.Item>
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </Container>
    </Flex>
  );
}
