import { StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Box,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  Center,
  View,
  Avatar,
  Text,
  Link,
  Divider,
} from "native-base";
import { AuthContext } from "../../context/AuthContext";
import SpashLoading from "../../components/SpashLoading";


export default function LoginScreen({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  const { login, isLoading } = useContext(AuthContext);
  const onSubmit = async (data) => {
    // console.log(data)
    try {
      await login(data);
    } catch (error) {
      // console.log("error",error)
    }
  };
  return (
    <>
      {isLoading ? (
        <SpashLoading/>
      ) : (
        <Center flex={1} px="3">
          <Center w="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
              <View>
                <Avatar
                  bg="purple.600"
                  alignSelf="center"
                  size="2xl"
                  source={{
                    uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
                  }}
                >
                  RB
                </Avatar>
              </View>
              <VStack space={3} mt="5">
                <FormControl>
                  <FormControl.Label>Username</FormControl.Label>
                  <Controller
                    control={control}
                    rules={{
                      required: "Vui lòng nhập email",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Email chưa đúng định dạng",
                      },
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                      />
                    )}
                    name="email"
                  />
                  {errors.email && (
                    <FormControl.HelperText
                      _text={{
                        fontSize: "xs",
                      }}
                    >
                      {errors.email.message}
                    </FormControl.HelperText>
                  )}
                </FormControl>
                <FormControl>
                  <FormControl.Label>Password</FormControl.Label>
                  <Controller
                    control={control}
                    rules={{
                      required: "Vui lòng nhập mật khẩu",
                      pattern: {
                        // value:
                        //   /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g,
                        message:
                          "Chữ cái đầu phải viết hoa,có 8 kí tự và 1 kí tự đặc biệt",
                      },
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <Input
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        secureTextEntry={true}
                      />
                    )}
                    name="password"
                  />
                  {errors.password && (
                    <FormControl.HelperText
                      _text={{
                        fontSize: "xs",
                      }}
                    >
                      {errors.password.message}
                    </FormControl.HelperText>
                  )}
                </FormControl>
                <Button
                  mt="2"
                  mb={2}
                  colorScheme="indigo"
                  onPress={handleSubmit(onSubmit)}
                >
                  Sign in
                </Button>
              </VStack>
              <View
                mt={2}
                width={"100%"}
                flexDirection={"row"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Divider
                  width={"47%"}
                  _light={{
                    bg: "muted.800",
                  }}
                />
                <Text lineHeight={20} mb={3}>
                  or
                </Text>
                <Divider
                  width={"47%"}
                  _light={{
                    bg: "muted.800",
                  }}
                />
              </View>
              <HStack justifyContent={"space-between"} mb={5}>
                <Avatar
                  bg="indigo.500"
                  alignSelf="center"
                  size="md"
                  source={{
                    uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                  }}
                >
                  RS
                </Avatar>
                <Avatar
                  bg="indigo.500"
                  alignSelf="center"
                  size="md"
                  source={{
                    uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                  }}
                >
                  RS
                </Avatar>
                <Avatar
                  bg="indigo.500"
                  alignSelf="center"
                  size="md"
                  source={{
                    uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                  }}
                >
                  RS
                </Avatar>
              </HStack>
              <Link onPress={() => navigation.navigate("Signup")}>
                Don’t have an account? Sign up
              </Link>
            </Box>
          </Center>
        </Center>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    color: "blue",
  },
  input: {
    marginBottom: 12,
  },
  button: {
    padding: 5,
  },
});
