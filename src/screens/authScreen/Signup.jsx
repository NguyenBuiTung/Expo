import { View } from 'react-native'
import React, { useContext } from 'react'
import { Avatar, Box, Center, VStack } from 'native-base'
import { AuthContext } from '../../context/AuthContext';


export default function Signup() {
  const {loginWithGoogle , isLoading,request } = useContext(AuthContext);
  // console.log(request)
  return (
    <Center flex={1} px="3">
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <View
        >
         <Avatar bg="purple.600" alignSelf="center" size="2xl" source={{
        uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
      }}>
          RB
        </Avatar>
        </View>
        <VStack space={3} mt="5">
          {/* <Button
          disabled={!request}
            mt="2"
            colorScheme="indigo"
            onPress={loginWithGoogle}
          >
           Continew with google
          </Button> */}
        </VStack>
      </Box>
    </Center>
  </Center>
  )
}

