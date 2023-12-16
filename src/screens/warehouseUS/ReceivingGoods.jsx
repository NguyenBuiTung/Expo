import React, { useState } from "react";
import { Box, Button, Center, Input, Text } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";

export default function ReceivingGoods({ navigation }) {
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // const [boxHeight, setBoxHeight] = useState(100);
  return (
    <Center px="3" padding={10}>
      <Center w="100%">
        {/* <Box
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
              <Button
                bgColor={"red.400"}
                onPress={() => {
                  setIsDropdownOpen(!isDropdownOpen);
                  const dropdownContentHeight = 300;
                  if (!isDropdownOpen) {
                    setBoxHeight(boxHeight + dropdownContentHeight);
                  } else {
                    setBoxHeight(boxHeight - dropdownContentHeight);
                  }
                }}
              >
                {isDropdownOpen ? (
                  <MaterialIcons name="arrow-drop-up" size={24} color="black" />
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
          <Text marginTop={"32px"}>Tình trạng hàng</Text>
          <Input marginBottom={"32px"} size="lg" placeholder="oke" />
        </View>
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button width={"45%"} padding={"12px 52px"} borderRadius={"8px"}>
            Return hang
          </Button>
          <Button width={"45%"} padding={"12px 52px"} borderRadius={"8px"}>
            Nhan hang
          </Button>
        </View> */}
        <View style={{marginTop:50}}>
          <MaterialIcons
            onPress={() => navigation.navigate("QRcode")}
            name="qr-code-scanner"
            size={100}
            color="black"
          />
        </View>
      </Center>
    </Center>
  );
}
