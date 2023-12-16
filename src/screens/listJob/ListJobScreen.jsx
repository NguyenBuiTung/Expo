import {
  Avatar,
  Box,
  Divider,
  HStack,
  Heading,
  Spinner,
  Text,
  VStack,
} from "native-base";
import React, { useEffect } from "react";
import { store } from "../../redux/configStore ";
import { job } from "../../redux/product/listJob";
import { useSelector } from "react-redux";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function ListJobScreen() {
  const { listjob, isLoading, error } = useSelector((state) => state.listJob);
  //   console.log("listjob: ", listjob);
  const navigation = useNavigation();
  useEffect(() => {
    store.dispatch(job());
  }, []);
  return (
    <>
      <Text fontSize={"18px"} fontWeight={"bold"} marginBottom={"5px"}>
        {listjob?.length} việc làm phù hợp{" "}
      </Text>
      {isLoading ? (
        <Spinner color="emerald.500" size={"lg"} />
      ) : error ? (
        <Text>Loi</Text>
      ) : (
        listjob?.map((item, index) => {
          return (
            <Box
              key={index}
              width={"90%"}
              height={"auto"}
              bgColor={"white"}
              borderRadius={"16px"}
              padding={"24px"}
              shadow={"6"}
              marginBottom={"8px"}
            >
              <TouchableOpacity
                onPress={() => {
                  /* 1. Navigate to the Details route with params */
                  navigation.navigate("Detail", {
                    id: item?.id,
                  });
                }}
              >
                <HStack alignItems={"center"} justifyContent={"space-between"}>
                  <Avatar
                    marginRight={"5px"}
                    bg="cyan.500"
                    alignSelf="center"
                    size="md"
                    source={{
                      uri: item?.hinhAnh,
                    }}
                  ></Avatar>
                  <Heading fontSize={"16px"} width={"90%"}>
                    {item?.tenCongViec.length > 20
                      ? item?.tenCongViec.substr(0, 20) + "..."
                      : item?.tenCongViec}
                  </Heading>
                </HStack>
                <VStack>
                  <Text>Đánh giá:{item?.danhGia}</Text>
                  <Text>$ Tới {item?.giaTien} triệu</Text>
                  <Divider></Divider>
                  <Text fontWeight={"bold"}>
                    Còn {item?.saoCongViec} ngày ứng tuyển
                  </Text>
                </VStack>
              </TouchableOpacity>
            </Box>
          );
        })
      )}
    </>
  );
}
