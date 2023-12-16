import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import SpashLoading from "../components/SpashLoading";
import {
  Box,
  Center,
  Input,
  ScrollView,
  Text,
} from "native-base";
import NetInfo from "@react-native-community/netinfo";
import { View } from "react-native";
import ListJobScreen from "./listJob/ListJobScreen";


export default function HomeScreen() {
  const { isLoading, logout } = useContext(AuthContext);
  const [isConnected, setIsConnected] = useState(false);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const navigation = useNavigation();
  return (
    <>
      {isLoading ? (
        <SpashLoading />
      ) : (
        <ScrollView w={"100%"} h={"80"}>
          <Center px="3">
            <Center w="100%">
              {isConnected ? (
                <Text></Text>
              ) : (
                <Text
                  color={"red.500"}
                  marginTop={3}
                  marginBottom={3}
                  fontSize={16}
                  fontWeight={"bold"}
                >
                  Not internet...!
                </Text>
              )}
              <Box
                width={"90%"}
                height={120}
                bgColor={"green.600"}
                borderRadius={"16px"}
                padding={"24px"}
                marginBottom={"10px"}
              >
                <View>
                  <Text color={"white"} fontSize={"md"} marginBottom={"10px"}>
                    Tìm kiếm công việc phù hợp với bạn
                  </Text>
                  <Input
                    backgroundColor={"white"}
                    placeholder={"Từ khóa bạn đang tìm kiếm"}
                  />
                </View>
              </Box>
              <ListJobScreen />
            </Center>
          </Center>
        </ScrollView>
      )}
    </>
  );
}
