import React from "react";
import { Modal, Stack, Input, IconButton, VStack, Icon } from "native-base";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
export default function ModalSearch() {
  const [placement, setPlacement] = useState(undefined);
  const [open, setOpen] = useState(false);

  const openModal = (placement) => {
    setOpen(true);
    setPlacement(placement);
  };
  return (
    <>
      <Stack
        direction={{
          base: "column",
          md: "row",
        }}
        space={2}
      >
        <VStack space={4} alignItems="center">
          <IconButton
            borderRadius={50}
            onPress={() => openModal("top")}
            backgroundColor="red.700"
            colorScheme="indigo"
            variant="solid"
            _icon={{
              as: AntDesign,
              name: "search1",
            }}
          />
        </VStack>
      </Stack>
      <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
        <Modal.Content {...styles[placement]}>
          <VStack w="100%" space={5} alignSelf="center">
            <Input
              placeholder="Search"
              width="100%"
              borderRadius="4"
              py="3"
              px="1"
              fontSize="14"
              InputLeftElement={
                <Icon
                  m="2"
                  ml="3"
                  size="6"
                  color="gray.400"
                  as={<MaterialIcons name="search" />}
                />
              }
            />
          </VStack>
        </Modal.Content>
      </Modal>
    </>
  );
}
const styles = {
  top: {
    marginBottom: "auto",
    marginTop: 3,
  },
};
