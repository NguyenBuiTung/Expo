
import React, { useContext } from "react";
import { Spinner, HStack, Heading, Center, NativeBaseProvider } from "native-base";
import { AuthContext } from "../context/AuthContext";

export default function SpashLoading() {
  const { isLoading } = useContext(AuthContext);

  return (
    <>
      {isLoading && (
        <NativeBaseProvider>
          <Center flex={1} px="3">
            <HStack space={2} justifyContent="center" alignItems='center'>
              <Spinner accessibilityLabel="Loading posts" size='lg' />
              <Heading color="primary.500" fontSize="lg">
                Loading
              </Heading>
            </HStack>
          </Center>
        </NativeBaseProvider>
      )}
    </>
  );
}
