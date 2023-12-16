import { Alert, LayoutAnimation, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { useRoute } from "@react-navigation/native";
import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Heading,
  Image,
  ScrollView,
  Spinner,
  Text,
  VStack,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { store } from "../../redux/configStore ";
import { getDetailJob } from "../../redux/product/listJobDetail";
import { useSelector } from "react-redux";
import { AuthContext } from "../../context/AuthContext";
import { recruitmentJob } from "../../redux/user/pushJob";
export default function Detail() {
  const { detailjob, isLoading, error } = useSelector(
    (state) => state.listJobDetail
  );

  const { userAuth } = useContext(AuthContext);
  const route = useRoute();
  const { id } = route.params;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [boxHeight, setBoxHeight] = useState(230);
  const dropdownContentHeight = useMemo(() => 100, []);
  const configureLayoutAnimation = () => {
    LayoutAnimation.configureNext({
      duration: 200,
      create: {
        type: "linear",
        property: "scaleXY",
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
  useEffect(() => {
    store.dispatch(getDetailJob(id));
  }, [id]);

  const handleRecruitmentJob = async () => {
    const data = {
      id: userAuth?.user.id,
      maCongViec: detailjob?.id,
      maNguoiThue: userAuth?.user.id,
      ngayThue: "string",
      hoanThanh: true,
    };
    try {
      await store.dispatch(recruitmentJob(data));
      Alert.alert("Thành công", "Ứng tuyển thành công");
    } catch (error) {
      Alert.alert("Thất bại ", error?.message);
    }
  };
  return (
    <>
      {isLoading ? (
        <Spinner size={"lg"} />
      ) : error ? (
        <Text>{error?.response.data.content}</Text>
      ) : (
        <>
          <Center>
            <Center w="100%">
              <HStack width={"90%"} padding={3} alignItems={"center"}>
                <Image
                  marginRight={"10px"}
                  source={{
                    uri: detailjob?.hinhAnh,
                  }}
                  alt="Alternate Text"
                  size="md"
                />
                <VStack>
                  <Heading fontSize={"16px"} maxWidth={"90%"}>
                    {detailjob?.tenCongViec}
                  </Heading>
                  <Text>Đánh giá:{detailjob?.danhGia}</Text>
                </VStack>
              </HStack>
            </Center>
          </Center>
          <ScrollView w={"100%"} h={"80"}>
            <Center px="3" padding={10}>
              <Center w="100%">
                <Box
                  height={"auto"}
                  width={"90%"}
                  bgColor={"gray.200"}
                  borderRadius={"16px"}
                  padding={"24px"}
                  marginBottom={"8px"}
                >
                  <Heading>Thông tin chung</Heading>
                  <HStack alignItems={"center"}>
                    <MaterialIcons
                      name="attach-money"
                      size={30}
                      color={"green"}
                    />
                    <VStack marginLeft={"15px"}>
                      <Text>Mức lương:</Text>
                      <Text fontWeight={"bold"} fontSize={"16px"}>
                        {detailjob?.giaTien}$
                      </Text>
                    </VStack>
                  </HStack>
                  <Divider />
                  <HStack alignItems={"center"}>
                    <MaterialIcons
                      name="business-center"
                      size={30}
                      color={"green"}
                    />
                    <VStack marginLeft={"15px"}>
                      <Text>Hình thức làm việc:</Text>
                      <Text fontWeight={"bold"} fontSize={"16px"}>
                        Fulltime
                      </Text>
                    </VStack>
                  </HStack>
                  <Divider />
                  <HStack alignItems={"center"}>
                    <MaterialIcons
                      name="people-alt"
                      size={30}
                      color={"green"}
                    />
                    <VStack marginLeft={"15px"}>
                      <Text>Số lượng cần tuyển:</Text>
                      <Text fontWeight={"bold"} fontSize={"16px"}>
                        {detailjob?.saoCongViec} người
                      </Text>
                    </VStack>
                  </HStack>
                  <Divider />
                  <TouchableOpacity
                    style={{
                      width: "90%",
                      justifyContent: "center",
                      flexDirection: "row",
                    }}
                    onPress={handleDropDown}
                  >
                    {isDropdownOpen ? (
                      <Box width={"100%"}>
                        <HStack alignItems={"center"}>
                          <MaterialIcons name="wc" size={30} color={"green"} />
                          <VStack marginLeft={"15px"}>
                            <Text>Giới tính:</Text>
                            <Text fontWeight={"bold"} fontSize={"16px"}>
                              Không yêu cầu
                            </Text>
                          </VStack>
                        </HStack>
                        <HStack alignItems={"center"}>
                          <MaterialIcons
                            name="military-tech"
                            size={30}
                            color={"green"}
                          />
                          <VStack marginLeft={"15px"}>
                            <Text>Kinh nghiệm:</Text>
                            <Text fontWeight={"bold"} fontSize={"16px"}>
                              3 năm
                            </Text>
                          </VStack>
                        </HStack>
                        <HStack justifyContent={"center"}>
                          <Text style={{ color: "green" }}>Thu gọn</Text>
                        </HStack>
                      </Box>
                    ) : (
                      <Text style={{ color: "green" }}>Xem thêm</Text>
                    )}
                  </TouchableOpacity>
                </Box>
                <Box
                  height={"auto"}
                  width={"90%"}
                  bgColor={"gray.200"}
                  borderRadius={"16px"}
                  padding={"24px"}
                  marginBottom={"8px"}
                >
                  <Heading>Mô tả công việc</Heading>
                  <Text>{detailjob?.moTa}</Text>
                </Box>
                <Box
                  height={"auto"}
                  width={"90%"}
                  bgColor={"gray.200"}
                  borderRadius={"16px"}
                  padding={"24px"}
                >
                  <Heading>Yêu cầu ứng viên</Heading>
                  <Text>{detailjob?.moTaNgan}</Text>
                </Box>
              </Center>
            </Center>
          </ScrollView>
          <Center>
            <Center w="100%">
              <Divider fontWeight={"bold"} />
              <HStack
                width={"90%"}
                padding={3}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Button
                  borderRadius={"20px"}
                  backgroundColor={"green.600"}
                  onPress={handleRecruitmentJob}
                >
                  Ứng tuyển ngay
                </Button>
              </HStack>
            </Center>
          </Center>
        </>
      )}
    </>
  );
}
