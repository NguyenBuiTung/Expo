import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";

import { AuthContext } from "../context/AuthContext";
import Appbar from "../components/Appbar";

import QRcode from "../screens/qrFuntion/QRcode";

import LoginHome from "../screens/authScreen/LoginHome";
import LoginScreen from "../screens/authScreen/LoginScreen";
import Signup from "../screens/authScreen/Signup";
import ReceivingGoods from "../screens/warehouseUS/ReceivingGoods";
import LineEditor from "../screens/warehouseUS/LineEditor";
import SplitBale from "../screens/warehouseUS/SplitBale";
import Packing from "../screens/warehouseUS/Packing";
import Detail from "../screens/details/Detail";
const Stack = createNativeStackNavigator();
const authenticatedScreens = [
  {
    name: "Home",
    component: HomeScreen,
    options: {
      header: () => <Appbar />,
    },
  },
  {
    name: "QRcode",
    component: QRcode,
    options: {
      headerBackButtonMenuEnabled: true,
    },
  },
  {
    name: "ReceivingGoods",
    component: ReceivingGoods,
    
    options: {
      title:'Tiếp nhận hàng tới kho',
      headerBackButtonMenuEnabled: true,
    },
  },
  {
    name: "LineEditor",
    component: LineEditor,
    options: {
      title:'Soạn hàng',
      headerBackButtonMenuEnabled: true,
    },
  },
  {
    name: "SplitBale",
    component: SplitBale,
    options: {
      title:'Tách kiện',
      headerBackButtonMenuEnabled: true,
    },
  },
  {
    name: "Packing",
    component: Packing,
    options: {
      title:'Đóng hàng',
      headerBackButtonMenuEnabled: true,
    },
  },
  {
    name: "Detail",
    component: Detail,
    options: {
      title:'Chi tiết công việc',
      headerBackButtonMenuEnabled: true,
    },
  },
];

const unauthenticatedScreens = [
  {
    name: "LoginHome",
    component: LoginHome,
    options: { headerShown: false },
  },
  {
    name: "Login",
    component: LoginScreen,
    options: { headerShown: false },
  },
  {
    name: "Signup",
    component: Signup,
    options: { headerShown: false },
  },
];

export default function Navigation() {
  const { userAuth } = useContext(AuthContext);
  // console.log("userAuth", userAuth?.token);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userAuth?.token
          ? authenticatedScreens.map((screen) => (
              <Stack.Screen
                key={screen.name}
                name={screen.name}
                component={screen.component}
                options={screen.options}
              />
            ))
          : unauthenticatedScreens.map((screen) => (
              <Stack.Screen
                key={screen.name}
                name={screen.name}
                component={screen.component}
                options={screen.options}
              />
            ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
