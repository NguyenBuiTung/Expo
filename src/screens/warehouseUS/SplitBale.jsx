import { View } from "react-native";
import React from "react";
import { Button, Center, Input, Text, TextArea } from "native-base";

export default function SplitBale() {
  return (
    <Center px="3" padding={10}>
      <Center w="100%">
        <View
          style={{
            width: "90%",
            justifyContent: "flex-start",
          }}
        >
          <Text  marginBottom={"24px"}>
            Mã khách hàng
          </Text>
          <Input size="lg" placeholder="lorem" />
        </View>
        <View
          style={{
            width: "90%",
            justifyContent: "flex-start",
          }}
        >
          <Text marginTop={"32px"} marginBottom={"24px"}>
            Loại hàng
          </Text>
          <Input marginBottom={"32px"} size="lg" placeholder="lorem" />
        </View>
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "47%" }}>
            <Text marginBottom={"24px"}>Tổng số kiện tách </Text>
            
            <Input marginBottom={"32px"} size="lg" placeholder="lorem" />
          </View>
          <View style={{ width: "47%" }}>
            <Text marginBottom={"24px"}> Số lượng mỗi kiện</Text>
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
              placeholder="lorem"
              marginBottom={"24px"}
            />
          </View>
        <View
            style={{
              width: "90%",
              justifyContent: "flex-start",
            }}
          >
           <Button padding={"12px 52px"} borderRadius={"8px"}>Soạn hàng</Button>
          </View>

      </Center>
    </Center>
  );
}
