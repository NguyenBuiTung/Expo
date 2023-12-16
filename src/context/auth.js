import { useState } from "react";
import { httpClient } from "../utils/config";
import * as WebBrowser from "expo-web-browser";
// import { Audio } from 'expo-av';
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
WebBrowser.maybeCompleteAuthSession();
export const authProvider = () => {
  const [userAuth, setUserAuth] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: "631382790066-eagij69lvql89gsc08o5rf6bf694rfp8.apps.googleusercontent.com",
    iosClientId: "631382790066-kii24obptesgvn24q5auti40ucuie2j8.apps.googleusercontent.com",
    expoClientId: "631382790066-us9k3e88chfos8lv2o5om3j7ojrtknq9.apps.googleusercontent.com"

  });

  const login = async (user) => {
    setIsLoading(true);
    try {
      const response = await httpClient.post("/auth/signin", user);
      const reponseData = response.data.content;
      // console.log('reponseData', reponseData)
      setUserAuth(reponseData);
      await AsyncStorage.setItem("access_token", JSON.stringify(reponseData));
      setIsLoading(false);
      // const storedToken = await AsyncStorage.getItem('access_token');
      // const tokenObject = JSON.parse(storedToken).access_token;
      // httpClient.defaults.headers.common['Authorization'] = `Bearer ${tokenObject}`;
    } catch (error) {
      setIsLoading(false);
    }
  };
  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      const result = await promptAsync();
      const resultData = result.authentication
      setUserAuth(resultData)
      await AsyncStorage.setItem("access_token", JSON.stringify(resultData))
      setIsLoading(false)
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
  }
  const logout = async () => {
    setIsLoading(true);
    try {
      const reponse = await httpClient.post("/auth/logout")
      console.log(reponse.data.message)
      AsyncStorage.removeItem("access_token");
      setUserAuth({});
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }

  };
  return {
    userAuth,
    isLoading,
    login,
    logout,
    loginWithGoogle,
    request
  }
}
