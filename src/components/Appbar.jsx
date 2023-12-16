import { Text } from "react-native";
import React, { useContext } from "react";
import { Avatar, Box, Center, Container, HStack, Stack } from "native-base";
import Notification from "./Notification";
import { AuthContext } from "../context/AuthContext";
export default function Appbar() {
  const { userAuth } = useContext(AuthContext);

  return (
    <Center>
      <Container>
        <Box safeAreaTop bg="violet.600" />
        <HStack
          px="1"
          py="3"
          justifyContent={"space-between"}
          alignItems="center"
          w="100%"
        >
          <HStack alignItems="center">
            <Avatar
              bg="green.500"
              source={{uri:userAuth?.user?.avatar}}
            ></Avatar>
            <HStack flexDirection="column" marginLeft={2}>
              <Text>Chào mừng bạn quay trở lại,</Text>
              <Text style={{ fontWeight: 600 }}>{userAuth?.user?.name}</Text>
            </HStack>
          </HStack>
          <Stack direction={"row"} space={3} alignItems={"center"}>
            {/* <ModalSearch /> */}
            <Notification />
          </Stack>
        </HStack>
      </Container>
    </Center>
  );
}
