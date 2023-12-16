import React, { useMemo, useState } from "react";
import { LayoutAnimation, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Box,
  Button,
  Center,
  Input,
  ScrollView,
  Text,
  IconButton,
  VStack,
  HStack,
  Icon,
  useToast,
} from "native-base";

export default function Packing() {
  const instState = [
    {
      title: "0999999",
      isCompleted: false,
    },
    {
      title: "0999998",
      isCompleted: false,
    },
    {
      title: "0999997",
      isCompleted: false,
    },
    {
      title: "0999996",
      isCompleted: false,
    },
    {
      title: "0999995",
      isCompleted: false,
    },
    {
      title: "0999994",
      isCompleted: false,
    },
    {
      title: "0999993",
      isCompleted: false,
    },
    {
      title: "0999992",
      isCompleted: false,
    },
    {
      title: "0999991",
      isCompleted: false,
    },
    {
      title: "0999990",
      isCompleted: false,
    },
  ];
  const [list, setList] = React.useState(instState);
  // const [inputValue, setInputValue] = React.useState("");
  const toast = useToast();
  const handleDelete = (index) => {
    setList((prevList) => {
      const temp = prevList.filter((_, itemI) => itemI !== index);
      return temp;
    });
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [boxHeight, setBoxHeight] = useState(100);
  const dropdownContentHeight = useMemo(() => 300, []);
  const configureLayoutAnimation = () => {
    LayoutAnimation.configureNext({
      duration: 200,
      create: {
        type:'linear',
        property:'scaleXY'
      },
      update: {
        type: LayoutAnimation.Types.easeInEaseOut,
      },
    });
  };

  const handleDropDown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    if (!isDropdownOpen) {
      configureLayoutAnimation();
      setBoxHeight(boxHeight + dropdownContentHeight);
    } else {
      configureLayoutAnimation();
      setBoxHeight(boxHeight - dropdownContentHeight);
    }
  };
  return (
    <ScrollView w={"100%"} h={"80"}>
      <Center px="3" padding={10}>
        <Center w="100%">
          <Box
            width={"90%"}
            height={boxHeight}
            bgColor={"red.400"}
            borderRadius={"16px"}
            padding={"24px"}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ width: "50%" }}>
                <Text fontSize={"16px"} fontWeight={"600"}>
                  Tình trạng hàng
                </Text>
                <Text>Lorem ipsum, dolor sit amet consec.</Text>

                {isDropdownOpen && (
                  <View>
                    <Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Maiores dicta soluta unde repellat modi aperiam architecto
                      exercitationem iure cumque culpa necessitatibus veniam at
                      aliquam incidunt, porro est nesciunt eos error.
                    </Text>
                  </View>
                )}
              </View>
              <View>
                <Button bgColor={"red.400"} onPress={handleDropDown}>
                  {isDropdownOpen ? (
                    <MaterialIcons
                      name="arrow-drop-up"
                      size={24}
                      color="black"
                    />
                  ) : (
                    <MaterialIcons
                      name="arrow-drop-down"
                      size={24}
                      color="black"
                    />
                  )}
                </Button>
              </View>
            </View>
          </Box>
          <View
            style={{
              width: "90%",
              justifyContent: "flex-start",
            }}
          >
            <Text marginTop={"32px"} marginBottom={"24px"}>
              Mã thùng
            </Text>
            <Input size="lg" placeholder="lorem" />
            <Text marginTop={"33px"} marginBottom={"24px"}>
              Mã kiện
            </Text>
            <Input size="lg" placeholder="lorem" />
            <VStack marginTop={"20px"}>
              <HStack justifyContent={"space-between"} flexWrap={"wrap"}>
                {list.map((item, itemI) => (
                  <HStack
                    marginBottom={"12px"}
                    width={"30%"}
                    backgroundColor={"#E0E0E0"}
                    padding={"8px"}
                    borderRadius={"4px"}
                    justifyContent="flex-start"
                    alignItems="center"
                    key={item.title + itemI.toString()}
                  >
                    <Text>{item.title}</Text>
                    <IconButton
                      size="sm"
                      colorScheme="trueGray"
                      icon={
                        <Icon
                          as={MaterialIcons}
                          name="close"
                          size="xs"
                          color="trueGray.400"
                        />
                      }
                      onPress={() => handleDelete(itemI)}
                    />
                  </HStack>
                ))}
              </HStack>
            </VStack>
          </View>
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: "47%" }}>
              <Text marginBottom={"24px"}>Số lượng kiện/thùng</Text>
              <Input marginBottom={"32px"} size="lg" placeholder="lorem" />
            </View>
            <View style={{ width: "47%" }}>
              <Text marginBottom={"24px"}>Khối lượng thùng(kg)</Text>
              <Input marginBottom={"33px"} size="lg" placeholder="lorem" />
            </View>
          </View>
          <Button w={"90%"}>Đóng hàng</Button>
        </Center>
      </Center>
    </ScrollView>
  );
}
