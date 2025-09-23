import { Flex } from "@chakra-ui/react";
import SideNav from "../Components/SideNav";
import TopNav from "../Components/TopNav";

export default function Dashboard() {
  return (
    <Flex>
      <SideNav />
      <Flex direction="column" flex="1">
        <TopNav />
      </Flex>
    </Flex>
  );
}
