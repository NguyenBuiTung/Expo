import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import Constants from 'expo-constants'
const BASE_URL = Constants.expoConfig.extra.apiUrl

export const httpClient = axios.create({
  baseURL: BASE_URL, //tất cả các hàm khi gọi api đều sử dụng domain này
  timeout: 15000, //nếu request mất 5 phút mà không nhận được kết quả thì huỷ request
});
//Cấu hình cho request: Client gửi api đến server
httpClient.interceptors.request.use(
  async (config) => {
    config.headers['Content-Type'] = 'application/json';
    const tokenString = await AsyncStorage.getItem('access_token');
    if (tokenString !== null) {
      const token = JSON.parse(tokenString).token;
      config.headers.token = `${token}`;
      config.headers.tokenCybersoft = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwMSIsIkhldEhhblN0cmluZyI6IjMwLzA5LzIwMzEiLCJIZXRIYW5UaW1lIjoiMTk0ODQ5MjgwMDAwMCIsIm5iZiI6MTYwMTIyNjAwMCwiZXhwIjoxOTQ4NjQwNDAwfQ.4l-eTzlgVnFczfvc2Or7BNPOcaesY3Kwc8RoNm-o-6M'
    }

    return config;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  }
);
//cấu hình cho response: Server sẽ trả dữ liệu về cho client
httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    //Thất bại của tất cả request sử dụng http sẽ trả vào đây
    console.log(error);

    return Promise.reject(error);
  }
);