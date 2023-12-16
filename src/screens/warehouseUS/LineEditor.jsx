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
  TextArea,
} from "native-base";

export default function LineEditor() {
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
              Mã khách hàng
            </Text>
            <Input size="lg" placeholder="lorem" />
            <Text marginTop={"33px"} marginBottom={"24px"}>
              Loại hàng
            </Text>
            <Input marginBottom={"33px"} size="lg" placeholder="lorem" />
          </View>
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ width: "47%" }}>
              <Text marginBottom={"24px"}>Số lượng sản phẩm </Text>
              <Input marginBottom={"32px"} size="lg" placeholder="lorem" />
            </View>
            <View style={{ width: "47%" }}>
              <Text marginBottom={"24px"}>Cân nặng</Text>
              <Input marginBottom={"33px"} size="lg" placeholder="lorem" />
            </View>
          </View>
          <View
            style={{
              width: "90%",
              justifyContent: "flex-start",
            }}
          >
            <Text marginBottom={"24px"}>Ghi chú</Text>
            <TextArea
              h={20}
              placeholder="Text Area Placeholder"
              marginBottom={"24px"}
            />
          </View>
          <View
            style={{
              width: "90%",
              justifyContent: "flex-start",
            }}
          >
            <Text marginBottom={"24px"}>Hình ảnh</Text>
            <TextArea
              marginBottom={"12px"}
              h={20}
              placeholder="Text Area Placeholder"
            />
          </View>
          <View
            style={{
              width: "90%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button width={"47%"} padding={"12px 52px"} borderRadius={"8px"}>
              Tách kiện
            </Button>
            <Button width={"47%"} padding={"12px 52px"} borderRadius={"8px"}>
              Soạn hàng
            </Button>
          </View>
        </Center>
      </Center>
    </ScrollView>
  );
}
