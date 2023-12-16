import React, { useState, useEffect, useCallback, useRef } from "react";
import { Audio } from "expo-av";
import { Text, View, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { BarCodeScanner } from "expo-barcode-scanner";
import { checkGoods } from "../../redux/product/productRedux";
import { useDispatch, useSelector } from "react-redux";
import { AlertDialog, Button } from "native-base";
export default function QRcode() {
  const [type, setType] = useState(BarCodeScanner.Constants.Type.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [sound, setSound] = useState();
  const dispatch = useDispatch();
  const checkGod = useSelector((state) => state.productRedux.checkGod);
  // console.log("checkGod: ", checkGod);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSuccess, setIsOpenSuccess] = useState(false);

  const cancelRef = useRef(null);
  const cancelRefSuccess = useRef(null);
  //Hàm đóng alet dialog khi quét thất bại
  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);
  //Hàm đóng alert dialog khi quét thành công
  const onCloseSuccess = useCallback(() => {
    setIsOpenSuccess(false);
  }, []);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getBarCodeScannerPermissions();
  }, []);
  //Hàm set lại trạng thái camera trước và sau
  const setCamera = useCallback(() => {
    setType((current) =>
      current === BarCodeScanner.Constants.Type.back
        ? BarCodeScanner.Constants.Type.front
        : BarCodeScanner.Constants.Type.back
    );
  }, []);
  //Hàm gọi âm thanh khi scan thành công
  const playSound = useCallback(async () => {
    const { sound } = await Audio.Sound.createAsync(
      require("../../assets/audio/Scanbip.mp3")
    );
    setSound(sound);
    await sound.playAsync();
  }, []);
  //Hàm gọi khi quét mã vạch
  const handleBarCodeScanned = useCallback(
    async ({ type, data }) => {
      setScanned(true);
      try {
        const action = checkGoods({ scanCheck: data });
        await dispatch(action);
        setIsOpenSuccess(!isOpenSuccess);
        playSound();
      } catch (error) {
        setIsOpen(!isOpen);
        playSound();
      }
    },
    [checkGoods]
  );
  //Hàm gọi khi scan thất bại xong và đóng alert
  const handleScan = useCallback(() => {
    setScanned(false);
    onClose();
  }, [onClose]);
  //Hàm gọi khi scan thành công xong và đóng alert
  const handleScanSuccess = useCallback(() => {
    setScanned(false);
    onCloseSuccess();
  }, [onCloseSuccess]);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject, styles.focused]}
        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.ean13]}
        type={type}
       
      />
      <View style={styles.layerTop} />
      <View style={styles.layerCenter}>
        <AlertDialog
          leastDestructiveRef={cancelRefSuccess}
          isOpen={isOpenSuccess}
          onClose={onCloseSuccess}
        >
          <AlertDialog.Content>
            <AlertDialog.Header>SUCCESS</AlertDialog.Header>
            <AlertDialog.Body>{checkGod?.message}</AlertDialog.Body>
            <AlertDialog.Footer justifyContent={"center"}>
              <Button
                width={"50%"}
                colorScheme="success"
                onPress={handleScanSuccess}
              >
                OK
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
        <AlertDialog
          leastDestructiveRef={cancelRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <AlertDialog.Content>
            <AlertDialog.Header>ERROR!</AlertDialog.Header>
            <AlertDialog.Body>
              Mã đã được quét! Vui lòng bỏ qua
            </AlertDialog.Body>
            <AlertDialog.Footer justifyContent={"center"}>
              <Button width={"50%"} colorScheme="danger" onPress={handleScan}>
                Try again
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Content>
        </AlertDialog>
        <View style={styles.layerLeft} />
        <View style={styles.focused} />
        <View style={styles.layerRight} />
      </View>
      <View style={styles.layerBottom}>
        <MaterialIcons
          name="flip-camera-android"
          size={60}
          color="white"
          onPress={setCamera}
        />
      </View>
    </View>
  );
}

const opacity = "rgba(0, 0, 0, .6)";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  layerTop: {
    flex: 1,
    backgroundColor: opacity,
  },
  layerCenter: {
    height: 200,
    flex: 1,
    flexDirection: "row",
  },
  layerLeft: {
    flex: 1,
    backgroundColor: opacity,
  },
  focused: {
    flex: 10,
  },
  layerRight: {
    flex: 1,
    backgroundColor: opacity,
  },
  layerBottom: {
    flex: 1,
    backgroundColor: opacity,
    justifyContent: "center",
    alignItems: "center",
  },
});
