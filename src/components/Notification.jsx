
import { Badge, IconButton, VStack } from 'native-base'
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
export default function Notification() {
  return (
    <VStack marginBottom={2}>
    <Badge // bg="red.400"
  colorScheme="danger" rounded="full" mb={-4} mr={-4} zIndex={1} variant="solid" alignSelf="flex-end" _text={{
    fontSize: 12
  }}>
      2
    </Badge>
    <IconButton
            borderRadius={50}
            backgroundColor="red.700"
            colorScheme="indigo"
            variant="solid"
            _icon={{
              as: AntDesign,
              name: "bells",
            }}
          />
  </VStack>
  )
}